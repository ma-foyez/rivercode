import groq from 'groq'; 
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "projects"] | order(_createdAt)`;

export const fetchProject = async () => {
  const getData = await sanityClient.fetch(query);
  return getData;
};
