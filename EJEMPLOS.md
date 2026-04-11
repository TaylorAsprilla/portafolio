# Ejemplos de Extensión

Ejemplos prácticos de cómo agregar funcionalidades al portafolio.

## 1. Agregar Integración con Email Real

### Usando Resend (Recomendado)

**1. Instalar dependencia:**
```bash
npm install resend
```

**2. Crear API Route:**
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: ['tu@email.com'],
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
```

**3. Actualizar formulario:**
```typescript
// components/sections/contact-section.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('¡Mensaje enviado! Te contactaré pronto.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error al enviar. Intenta de nuevo.');
    }
  } catch (error) {
    alert('Error al enviar. Intenta de nuevo.');
  } finally {
    setIsSubmitting(false);
  }
};
```

**4. Agregar variable de entorno:**
```bash
# .env.local
RESEND_API_KEY=re_tu_api_key_real
```

## 2. Agregar Google Analytics

**1. Crear componente de Analytics:**
```typescript
// components/analytics.tsx
import Script from 'next/script';

export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

**2. Agregar al layout:**
```typescript
// app/layout.tsx
import { Analytics } from '@/components/analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**3. Variable de entorno:**
```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 3. Agregar Sección de Blog

**1. Crear estructura:**
```
content/
  blog/
    mi-primer-post.mdx
    otro-post.mdx
```

**2. Instalar dependencias:**
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

**3. Configurar Next.js:**
```typescript
// next.config.ts
import createMDX from '@next/mdx';

const withMDX = createMDX({});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
```

**4. Crear página de blog:**
```typescript
// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getPosts(); // Implementar función para leer posts
  
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
}
```

## 4. Agregar Modo Claro/Oscuro

**1. Instalar:**
```bash
npm install next-themes
```

**2. Configurar provider:**
```typescript
// components/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**3. Agregar toggle:**
```typescript
// components/theme-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

**4. Actualizar layout:**
```typescript
// app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 5. Agregar Sistema de Visualizaciones

**1. Crear tabla en base de datos (ejemplo con Supabase):**
```sql
CREATE TABLE project_views (
  id SERIAL PRIMARY KEY,
  project_id TEXT NOT NULL,
  viewed_at TIMESTAMP DEFAULT NOW()
);
```

**2. Crear API para registrar visita:**
```typescript
// app/api/views/[projectId]/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  
  await supabase
    .from('project_views')
    .insert({ project_id: projectId });
    
  return NextResponse.json({ success: true });
}

export async function GET(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  
  const { count } = await supabase
    .from('project_views')
    .select('*', { count: 'exact', head: true })
    .eq('project_id', projectId);
    
  return NextResponse.json({ views: count || 0 });
}
```

**3. Integrar en ProjectCard:**
```typescript
// components/sections/projects-section.tsx
function ProjectCard({ project }: { project: Project }) {
  const [views, setViews] = useState(0);
  
  useEffect(() => {
    fetch(`/api/views/${project.id}`)
      .then(res => res.json())
      .then(data => setViews(data.views));
  }, [project.id]);
  
  const handleVisit = () => {
    fetch(`/api/views/${project.id}`, { method: 'POST' });
  };
  
  return (
    <Card>
      {/* ... */}
      <CardFooter>
        <p className="text-sm text-muted-foreground">{views} vistas</p>
        <Button onClick={handleVisit}>Visitar</Button>
      </CardFooter>
    </Card>
  );
}
```

## 6. Agregar CMS con Sanity

**1. Crear proyecto Sanity:**
```bash
npm install @sanity/client next-sanity
npx sanity init
```

**2. Definir schema:**
```typescript
// sanity/schemas/project.ts
export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
```

**3. Fetch data:**
```typescript
// lib/sanity.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getProjects() {
  return client.fetch(`*[_type == "project"]`);
}
```

**4. Usar en página:**
```typescript
// app/page.tsx
import { getProjects } from '@/lib/sanity';

export default async function HomePage() {
  const projects = await getProjects();
  
  return <ProjectsSection projects={projects} />;
}
```

## 7. Agregar Rate Limiting

Para proteger endpoints de spam:

```bash
npm install @upstash/ratelimit @upstash/redis
```

```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests por minuto
});
```

```typescript
// app/api/contact/route.ts
import { ratelimit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: 'Demasiados intentos' },
      { status: 429 }
    );
  }
  
  // ... resto del código
}
```

## 8. Agregar Animaciones de Scroll Avanzadas

```bash
npm install react-intersection-observer
```

```typescript
// components/animated-section.tsx
"use client";

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
```

---

**Estos ejemplos te dan una base para extender tu portafolio según tus necesidades.**
