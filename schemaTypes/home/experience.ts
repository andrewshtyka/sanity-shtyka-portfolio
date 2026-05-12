import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function experience() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'experience',
      type: 'object',
      title: 'Experience',
      fields: [
        // Title
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },

        // Table columns names
        defineField({
          name: 'header',
          type: 'object',
          title: 'Table header',
          fields: [
            {
              name: 'col1',
              type: 'string',
              title: 'Title column 1',
            },
            {
              name: 'col2',
              type: 'string',
              title: 'Title column 2',
            },
          ],
        }),

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
                  name: 'years',
                  type: 'string',
                  title: 'Years',
                },
                {
                  name: 'duration',
                  type: 'string',
                  title: 'Duration',
                },
                {
                  name: 'role',
                  type: 'string',
                  title: 'Role',
                },
                {
                  name: 'company',
                  type: 'string',
                  title: 'Company',
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ]
}
