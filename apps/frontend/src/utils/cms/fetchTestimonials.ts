import groq from 'groq'; 
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "testimonials"] | order(_createdAt)`;

export const fetchTestimonials = async () => {
  const getData = await sanityClient.fetch(query);
  return getData;
};
