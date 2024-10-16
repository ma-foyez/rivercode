import groq from 'groq'; 
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "trustedCompany"]`;

export const fetchTrustedCompany = async () => {
  const cmsVideoSlider = await sanityClient.fetch(query);
  return cmsVideoSlider;
};
