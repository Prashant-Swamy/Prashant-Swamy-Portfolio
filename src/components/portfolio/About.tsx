import { GraduationCap, Sparkles, Target } from "lucide-react";

const cards = [
  { icon: GraduationCap, title: "Education", text: "B.E. in Computer Science & Engineering, Visvesvaraya Technological University" },
  { icon: Sparkles, title: "Focus", text: "Data analytics, dashboards, and turning raw data into clear business insights" },
  { icon: Target, title: "Mission", text: "Solve real-world business problems through analytics and visualization" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">A bit about me</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            I'm a Computer Science and Engineering graduate from Visvesvaraya
            Technological University with strong skills in Python, SQL, Power BI,
            Tableau, and data analytics. I enjoy working with data, building
            dashboards, and solving real-world business problems through
            analytics and visualization.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <c.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
