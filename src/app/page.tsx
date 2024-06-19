// Utils
import { getHomePageData } from "@/data/loaders";

// Components
import HeroSection from "@/components/custom/HeroSection";
import ExperienceSection from "@/components/custom/ExperienceSection";
import ProjectsSection from "@/components/custom/ProjectsSection/ProjectsSection";
import AboutSection from "@/components/custom/AboutSection";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;

  console.dir(blocks, { depth: null });

  function blockRenderer(block: any) {
    switch (block.__component) {
      case "layout.hero-section":
        return <HeroSection key={block.id} data={block} />;
      case "layout.experience-section":
        return <ExperienceSection key={block.id} data={block} />;
      case "layout.projects-section":
        return <ProjectsSection key={block.id} data={block} />;
      case "layout.about":
        return <AboutSection key={block.id} data={block} />;
      default:
        return null;
    }
  }

  if (!blocks) return <p>No sections found</p>;

  return (
    <>
      <main className="space-y-32 pb-6">
        {blocks.map(blockRenderer)}
        <div
          id="contact"
          className="my-20 flex h-svh items-center justify-center rounded-lg border-2 border-primary"
        >
          <h2>Contact</h2>
        </div>
      </main>
    </>
  );
}
