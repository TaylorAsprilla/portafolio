"use client";

import { useId, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/config";
import type { Content } from "@/content";

type Status = "idle" | "sending" | "success" | "error";

/** Endpoint PHP del hosting (ver public/api/contact.php). */
const ENDPOINT = "/api/contact.php";

export function ContactForm({ labels }: { labels: Content["contact"]["form"] }) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !json?.ok) throw new Error("send_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="label">
            {labels.name}
          </label>
          <Input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="label">
            {labels.email}
          </label>
          <Input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="label">
          {labels.message}
        </label>
        <Textarea
          id={`${id}-message`}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder={labels.messagePlaceholder}
        />
      </div>

      {/* Honeypot anti-spam: oculto para personas y lectores de pantalla */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              {labels.sending}
            </>
          ) : (
            <>
              {labels.send}
              <Send
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </>
          )}
        </Button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && <span className="text-primary">{labels.success}</span>}
          {status === "error" && (
            <span className="text-destructive">
              {labels.error}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline underline-offset-4 hover:text-foreground"
              >
                {labels.fallback}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
