import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

export async function fetchData(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
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
            project: {
              populate: {
                thumbnail: {
                  fields: ["id", "name", "formats"],
                },
                technologies: {
                  fields: ["iconKey", "label"],
                },
                project_categories: {
                  fields: ["id", "label"],
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
    populate: ["header.navigationLink"],
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
