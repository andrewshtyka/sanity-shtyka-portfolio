import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function error404() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'error404',
      type: 'object',
      title: 'Error 404',
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

        // Button
        {
          name: 'buttonTitle',
          type: 'string',
          title: 'Button title',
          description: 'Text inside the button, that leads to home page',
          initialValue: 'Go to home page',
        },
      ],
    }),
  ]
}
