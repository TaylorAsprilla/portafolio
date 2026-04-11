"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Node {
  id: number;
  x: number;
  y: number;
}

const codeSnippets = [
  "const app = () => {",
  "  return <div />",
  "}",
  "function getData() {",
  "  fetch('/api')",
  "}",
  "class Component {",
  "  render() {}",
  "}",
  "import React from",
  "export default",
  "async/await",
  "=> { ... }",
  "useState()",
  "useEffect()",
  "map((item) =>",
  "filter(x => x)",
  "const { data }",
  "interface Props",
  "type User = {",
  "npm install",
  "git commit -m",
  "docker build",
  "SELECT * FROM",
  "JOIN users ON",
  "WHERE id = 1",
];

export function AnimatedTechBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [mousePixels, setMousePixels] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Generar nodos solo en el cliente
    const generatedNodes: Node[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setNodes(generatedNodes);

    const generatedParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x: xPercent, y: yPercent });
      setMousePixels({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:50px_50px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {particles.length > 0 &&
        particles.map((particle) => {
          const dx = particle.x - mousePosition.x;
          const dy = particle.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const threshold = 15;
          const isNear = distance < threshold;
          const pushX = isNear ? (dx / distance) * (threshold - distance) * 0.5 : 0;
          const pushY = isNear ? (dy / distance) * (threshold - distance) * 0.5 : 0;

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/30 blur-sm transition-all duration-300"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0 + pushY, -30 + pushY, 0 + pushY],
                x: [0 + pushX, Math.sin(particle.id) * 20 + pushX, 0 + pushX],
                scale: isNear ? [1.5, 1.8, 1.5] : [1, 1.2, 1],
                opacity: isNear ? [0.6, 1, 0.6] : [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

      <motion.div
        className="pointer-events-none absolute left-[5%] top-[15%] max-w-xs font-mono text-xs text-blue-500/20"
        animate={{
          opacity:
            Math.abs(mousePosition.x - 5) < 15 && Math.abs(mousePosition.y - 15) < 15
              ? [0.3, 0.6, 0.3]
              : [0.15, 0.35, 0.15],
          y: [0, -20, 0],
          scale:
            Math.abs(mousePosition.x - 5) < 15 && Math.abs(mousePosition.y - 15) < 15 ? 1.05 : 1,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {codeSnippets.slice(0, 6).map((code, i) => (
          <motion.div
            key={i}
            className="mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0.1, 0.3, 0.1], x: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {code}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[8%] top-[25%] max-w-xs font-mono text-xs text-cyan-500/20"
        animate={{
          opacity:
            Math.abs(mousePosition.x - 92) < 15 && Math.abs(mousePosition.y - 25) < 15
              ? [0.3, 0.6, 0.3]
              : [0.15, 0.35, 0.15],
          y: [0, 15, 0],
          scale:
            Math.abs(mousePosition.x - 92) < 15 && Math.abs(mousePosition.y - 25) < 15 ? 1.05 : 1,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        {codeSnippets.slice(6, 12).map((code, i) => (
          <motion.div
            key={i}
            className="mb-1 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: [0.1, 0.3, 0.1], x: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          >
            {code}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[15%] max-w-xs font-mono text-xs text-sky-500/20"
        animate={{
          opacity:
            Math.abs(mousePosition.x - 15) < 15 && Math.abs(mousePosition.y - 80) < 15
              ? [0.3, 0.6, 0.3]
              : [0.15, 0.35, 0.15],
          y: [0, -15, 0],
          scale:
            Math.abs(mousePosition.x - 15) < 15 && Math.abs(mousePosition.y - 80) < 15 ? 1.05 : 1,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      >
        {codeSnippets.slice(12, 18).map((code, i) => (
          <motion.div
            key={i}
            className="mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0.1, 0.3, 0.1], x: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {code}
          </motion.div>
        ))}
      </motion.div>

      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {nodes.length > 0 &&
          nodes.map((node, i) => {
            const nextNode = nodes[(i + 1) % nodes.length];
            const secondNext = nodes[(i + 2) % nodes.length];
            return (
              <g key={`connections-${node.id}`}>
                <motion.line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="url(#lineGradient1)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                />
                {i % 2 === 0 && (
                  <motion.line
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${secondNext.x}%`}
                    y2={`${secondNext.y}%`}
                    stroke="url(#lineGradient2)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </g>
            );
          })}

        {nodes.length > 0 &&
          nodes.map((node, i) => {
            const dx = node.x - mousePosition.x;
            const dy = node.y - mousePosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const isNear = distance < 20;

            return (
              <motion.g key={`node-${node.id}`}>
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="12"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  opacity="0.3"
                  animate={{
                    r: isNear ? [15, 22, 15] : [12, 18, 12],
                    opacity: isNear ? [0.6, 0.3, 0.6] : [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="6"
                  fill="#3b82f6"
                  opacity="0.5"
                  animate={{
                    scale: isNear ? [1.3, 1.6, 1.3] : [1, 1.2, 1],
                    opacity: isNear ? [0.8, 1, 0.8] : [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
                <circle cx={`${node.x}%`} cy={`${node.y}%`} r="2" fill="#ffffff" opacity="0.9" />
              </motion.g>
            );
          })}
      </svg>

      <motion.div
        className="absolute h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
        animate={{
          x: `${mousePosition.x / 10}%`,
          y: `${mousePosition.y / 10}%`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        style={{
          left: "20%",
          top: "30%",
        }}
      />

      <motion.div
        className="absolute h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl"
        animate={{
          x: `${-mousePosition.x / 15}%`,
          y: `${-mousePosition.y / 15}%`,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 30 }}
        style={{
          right: "25%",
          bottom: "20%",
        }}
      />

      <motion.div
        className="absolute left-[8%] top-[45%] h-32 w-32 border border-blue-400/15 bg-blue-500/5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformOrigin: "center" }}
      />

      <motion.div
        className="absolute right-[10%] top-[65%] h-24 w-24 rounded-full border border-cyan-400/15 bg-cyan-500/5"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {[
        { left: "15%", top: "15%" },
        { right: "20%", top: "25%" },
        { left: "25%", bottom: "30%" },
        { right: "30%", bottom: "20%" },
      ].map((position, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-blue-500/60 shadow-lg shadow-blue-500/50"
          style={position}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Cursor interactivo con efecto de glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Ondas concéntricas */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Centro brillante */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/60 shadow-lg shadow-blue-400/50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Glow exterior */}
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-md" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />
    </div>
  );
}
