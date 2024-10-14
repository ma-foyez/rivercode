import { DocumentVideoIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSliders',
  title: 'Hero Sliders',
  type: 'document',
  icon: DocumentVideoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 120,
      },
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sliderVideo',
      title: 'Slider Video',
      type: 'file',
      options: {
        accept: 'video/webm, video/mp4, video/mov, video/avi', // Add more supported video extensions as needed
      },
    }),
    defineField({
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      // validation: (Rule) => Rule.required(),
    }),
  ],
})
