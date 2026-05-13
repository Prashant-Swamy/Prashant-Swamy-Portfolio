import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Prashant Swamy — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Prashant Swamy, Data Analyst skilled in Python, SQL, Power BI, Tableau, and modern data analytics.",
      },
      { property: "og:title", content: "Prashant Swamy — Data Analyst" },
      { property: "og:description", content: "Data analytics, dashboards, and data-driven solutions." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
