import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Experience</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Where I've worked</h2>
        </div>

        <div className="mt-12">
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Data Analyst Intern</h3>
                  <p className="mt-1 text-base font-medium text-primary">Cyient</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Worked on data analysis, reporting, and visualization tasks supporting
                    business decisions across engineering programs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} /> April 2025 – September 2025
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} /> Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
