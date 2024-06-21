import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

export async function fetchData(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const { data } = await response.json(); // Ignore the meta attribute
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  const homePageQuery = qs.stringify(
    {
      populate: {
        blocks: {
          populate: {
            primaryLink: true,
            secondaryLink: true,
            job: true,
            image: {
              fields: ["name", "url", "formats"],
            },
            projects: {
              fields: ["id", "title", "shortDescription"],
              populate: {
                project_categories: {
                  fields: ["label"],
                },
                technologies: {
                  fields: ["iconKey", "label"],
                },
                thumbnail: {
                  fields: ["name", "url", "formats"],
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // This option is recommended to encode only the values
    },
  );

  url.search = homePageQuery;

  return await fetchData(url.href);
}

export async function getGlobalData() {
  const baseUrl = getStrapiURL();

  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: ["header.navigationLink", "footer.linkToSource"],
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}
export async function getProjectData(projectId: number) {
  const url = new URL(`/api/projects/${projectId}`, baseUrl);

  url.search = qs.stringify({
    fields: ["title", "detailedDescription", "linkToView", "linkToCode"],
    populate: {
      project_categories: {
        fields: ["label"],
      },
      technologies: {
        fields: ["iconKey", "label"],
      },
    },
  });

  return await fetchData(url.href);
}
