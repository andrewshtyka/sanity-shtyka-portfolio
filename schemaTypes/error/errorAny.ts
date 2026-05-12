import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function errorAny() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'errorAny',
      type: 'object',
      title: 'Error Any',
      fields: [
        // Title
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },

        // Description
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },

        // Link
        {
          name: 'linkName',
          type: 'string',
          title: 'Link name',
          description: 'Text inside the button, that leads to home page',
          initialValue: 'Go to home page',
        },
      ],
    }),
  ]
}
