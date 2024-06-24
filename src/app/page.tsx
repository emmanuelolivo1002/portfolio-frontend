// Utils
import { getHomePageData } from "@/data/loaders";

// Components
import HeroSection from "@/components/custom/HeroSection/HeroSection";
import ExperienceSection from "@/components/custom/ExperienceSection";
import ProjectsSection from "@/components/custom/ProjectsSection/ProjectsSection";
import AboutSection from "@/components/custom/AboutSection";
import ContactSection from "@/components/custom/ContactSection";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;

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
      case "layout.contact-section":
        return <ContactSection key={block.id} data={block} />;
      default:
        return null;
    }
  }

  if (!blocks) return <p>No sections found</p>;

  return (
    <>
      <main>{blocks.map(blockRenderer)}</main>
    </>
  );
}
