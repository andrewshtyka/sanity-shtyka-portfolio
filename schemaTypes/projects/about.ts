import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function about() {
  return [
    defineField({
      name: 'about',
      type: 'object',
      title: 'About',
      components: {
        field: Divider,
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
          description: 'Short description of the project',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Website Link',
        },
      ],
    }),
  ]
}
