import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.MODE === 'production',
  apiVersion: '2023-05-03',
}

export const sanityClient = createClient(config)

export const imageBuilder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => imageBuilder.image(source)