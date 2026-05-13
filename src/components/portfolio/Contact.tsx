import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Let's work together</h2>
          <p className="mt-4 text-muted-foreground">
            Have a role, a project, or just want to chat about data? Drop a message.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href="mailto:prashantswa52@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="text-sm font-medium">prashantswa52@gmail.com</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-swamy/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Linkedin size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium">Connect with me</div>
              </div>
            </a>
            <a
              href="https://github.com/prashant-swamy"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Github size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</div>
                <div className="text-sm font-medium">Browse my code</div>
              </div>
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
                <input
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Subject</label>
              <input
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Send size={15} /> {sent ? "Message sent!" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
