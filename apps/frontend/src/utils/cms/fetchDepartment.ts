import groq from 'groq'; 
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "department"] | order(_createdAt)`;

export const fetchDepartment = async () => {
  const getData = await sanityClient.fetch(query);
  return getData;
};
