import { Github, ExternalLink } from "lucide-react";
import trainImg from "@/assets/project-train.jpg";
import jobsImg from "@/assets/project-jobs.jpg";

const projects = [
  {
    title: "E-commerce Sales Intelligence Platform",
    image: trainImg,
    description:
      "Developed an end-to-end E-commerce Sales Intelligence Platform to analyze customer behavior, sales trends, and business performance using real-world e-commerce data.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQL", "Chart.js", "Leaflet.js", "JavaScript", "Render", "Vercel"],
    github: "https://github.com/Prashant-Swamy/ecommerce-sales-intelligence",
  },
  {
    title: "India Train Delay Intelligence Dashboard",
    image: jobsImg,
    description:
      "Developed a full-stack analytics dashboard to analyze Indian Railways train delay patterns using real-time railway API data. Built automated Python-based data collection pipelines to fetch and store train running status data in PostgreSQL at regular intervals.",
    stack: ["Python", "BeautifulSoup", "FastAPI", "PostgreSQL", "SQL", "Next.js", "Recharts", "JavaScript"],
    github: "https://github.com/Prashant-Swamy/train-delay-intelligence",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Projects</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Selected work</h2>
          <p className="mt-4 text-muted-foreground">
            Data products built end-to-end — pipelines, storage, APIs, and dashboards.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
