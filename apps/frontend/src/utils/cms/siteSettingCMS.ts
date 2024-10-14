import { groq } from "next-sanity";
import { sanityClient } from "./_helper/sanity";

const managePage = groq`*[_type == "managePages"] | order(_createdAt)`;

export const fetchManagePagesData = async () => {
  const getDataFromCMS = await sanityClient.fetch(managePage);
  return getDataFromCMS;
};
