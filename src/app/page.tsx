import qs from "qs";

// Components
import HeroSection from "@/components/custom/HeroSection";
import ExperienceSection from "@/components/custom/ExperienceSection";

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
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");

  console.dir(strapiData, { depth: null });

  const { title, description, blocks } = strapiData.data.attributes;

  return (
    <>
      <nav>Navigation</nav>
      <main className="py-6">
        <HeroSection data={blocks[0]} />
        <ExperienceSection />
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
