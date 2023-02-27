import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Restaurant Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: Rule => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'lng',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: Rule => Rule.min(0).max(5).error('Rating must be between 0 and 5'), 
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [{type: 'category'}], 
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
