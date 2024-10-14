import { groq } from "next-sanity";
import { sanityClient } from "./_helper/sanity";

const query = groq`*[_type == "myInsightHeroVideoSlider"] | order(_createdAt)`;

export const fetchVideoSliderCMS = async () => {
  const cmsVideoSlider = await sanityClient.fetch(query);
  return cmsVideoSlider;
};
