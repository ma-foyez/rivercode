import groq from 'groq'; 
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "trustedCompany"] | order(_createdAt)`;

export const fetchTrustedCompany = async () => {
  const getData = await sanityClient.fetch(query);
  return getData;
};
