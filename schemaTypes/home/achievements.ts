import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function achievements() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'achievements',
      type: 'object',
      title: 'Achievements',
      fields: [
        // Title
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },

        // Table content
        defineField({
          name: 'table',
          type: 'array',
          title: 'Table content',
          of: [
            defineField({
              name: 'item',
              type: 'object',
              title: 'Item',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'subtitle',
                  type: 'string',
                  title: 'Subtitle',
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ]
}
