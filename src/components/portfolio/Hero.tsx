import { Download, Github, Linkedin, FolderOpen, ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            Available for opportunities
          </span>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Prashant <span className="text-gradient">Swamy</span>
          </h1>
          <p className="mt-4 font-display text-lg text-muted-foreground md:text-xl">
            Data Analyst <span className="mx-2 text-primary">•</span> Python
            <span className="mx-2 text-primary">•</span> SQL
            <span className="mx-2 text-primary">•</span> Power BI
            <span className="mx-2 text-primary">•</span> Tableau
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Computer Science graduate passionate about data analytics,
            visualization, and building data-driven solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <FolderOpen size={16} /> View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-swamy/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Prashant-Swamy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
            >
              <Github size={18} />
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: "2+", l: "Projects" },
              { v: "6mo", l: "Internship" },
              { v: "10+", l: "Tools" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto md:mx-0">
          <div
            className="absolute inset-0 -z-10 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative animate-float">
            <div className="rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-elegant)]">
              <img
                src={profile}
                alt="Prashant Swamy, Data Analyst"
                width={320}
                height={320}
                className="h-72 w-72 rounded-2xl object-cover md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a href="#about" aria-label="Scroll" className="text-muted-foreground hover:text-foreground">
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
}
