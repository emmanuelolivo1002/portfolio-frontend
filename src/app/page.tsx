import qs from "qs";

// Components
import HeroSection from "@/components/custom/HeroSection";
import ExperienceSection from "@/components/custom/ExperienceSection";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        primaryLink: {
          populate: true,
        },
        secondaryLink: {
          populate: true,
        },
        job: {
          populate: true,
        },
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
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
      <nav>Navigation</nav>
      <main className="py-6 space-y-32">
        {blocks.map(blockRenderer)}
        <div
          id="projects"
          className="my-20 rounded-lg h-svh flex items-center justify-center border-2 border-green-500"
        >
          <h2>Projects</h2>
        </div>
        <div
          id="about-me"
          className="my-20 rounded-lg h-svh flex items-center justify-center border-2 border-green-500"
        >
          <h2>About Me</h2>
        </div>
        <div
          id="contact"
          className="my-20 rounded-lg h-svh flex items-center justify-center border-2 border-green-500"
        >
          <h2>Contact</h2>
        </div>
      </main>
    </>
  );
}
