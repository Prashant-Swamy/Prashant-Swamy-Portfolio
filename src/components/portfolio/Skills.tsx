import {
  Code2, Database, BarChart3, PieChart, FileSpreadsheet,
  Server, Zap, Braces, Atom, Hexagon,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: PieChart },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "PostgreSQL", icon: Server },
  { name: "FastAPI", icon: Zap },
  { name: "JavaScript", icon: Braces },
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Hexagon },
];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Skills</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Tools I work with</h2>
          <p className="mt-4 text-muted-foreground">
            A modern stack for analytics, visualization, and full-stack data products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                <s.icon size={22} />
              </div>
              <span className="text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
