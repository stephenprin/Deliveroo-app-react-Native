import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'features',
  title: 'Featured Menu Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Feature Category name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short description',
            type: 'string',
            validation: Rule => Rule.max(200),
        }),
        defineField({
            name: 'restaurant',
            title: 'Restaurant',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'restaurant'}]}],
        }),
    ]
})