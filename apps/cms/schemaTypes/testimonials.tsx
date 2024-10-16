import {BlockContentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'profile',
      title: 'Profile (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
