import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prashant Swamy. Crafted with care.
        </p>
        <div className="flex gap-2">
          <a href="mailto:prashantswa52@gmail.com" aria-label="Email"
            className="rounded-full border border-border bg-card p-2 text-muted-foreground hover:text-foreground">
            <Mail size={16} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="rounded-full border border-border bg-card p-2 text-muted-foreground hover:text-foreground">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="rounded-full border border-border bg-card p-2 text-muted-foreground hover:text-foreground">
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
