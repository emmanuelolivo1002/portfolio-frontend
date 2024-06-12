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

  url.search = homePageQuery;

  return await fetchData(url.href);
}

export async function getGlobalData() {
  const baseUrl = getStrapiURL();

  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: ["header.logoText", "header.ctaButton", "footer.logoText", "footer.socialLink"],
  });

  return await fetchData(url.href);
}
