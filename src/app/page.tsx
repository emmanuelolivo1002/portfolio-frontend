// Components
import HeroSection from "@/components/custom/HeroSection";
import ExperienceSection from "@/components/custom/ExperienceSection";
import { getHomePageData } from "@/data/loaders";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;

  function blockRenderer(block: any) {
    switch (block.__component) {
      case "layout.hero-section":
        return <HeroSection key={block.id} data={block} />;
      case "layout.experience-section":
        return <ExperienceSection key={block.id} data={block} />;
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
          id="projects"
          className="my-20 flex h-svh items-center justify-center rounded-lg border-2 border-green-500"
        >
          <h2>Projects</h2>
        </div>
        <div
          id="about-me"
          className="my-20 flex h-svh items-center justify-center rounded-lg border-2 border-green-500"
        >
          <h2>About Me</h2>
        </div>
        <div
          id="contact"
          className="my-20 flex h-svh items-center justify-center rounded-lg border-2 border-green-500"
        >
          <h2>Contact</h2>
        </div>
      </main>
    </>
  );
}
