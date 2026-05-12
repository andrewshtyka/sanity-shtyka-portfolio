import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function about() {
  return [
    defineField({
      name: 'about',
      type: 'object',
      components: {
        field: Divider,
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          description: 'Short description of the project',
        },
        {
          title: 'Website Link',
          name: 'link',
          type: 'url',
        },
      ],
    }),
  ]
}
