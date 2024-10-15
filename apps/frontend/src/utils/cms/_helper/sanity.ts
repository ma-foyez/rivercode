import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  useCdn: import.meta.env.MODE === 'production',
  apiVersion: '2023-05-03',
}

export const sanityClient = createClient(config)

export const imageBuilder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => imageBuilder.image(source)