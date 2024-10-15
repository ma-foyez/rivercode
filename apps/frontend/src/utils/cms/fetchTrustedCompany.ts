import { groq } from "next-sanity";
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "siteSettings"] | order(_createdAt)`;

export const fetchTrustedCompany = async () => {
  try {
    const getData = await sanityClient.fetch(query);
    return getData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};