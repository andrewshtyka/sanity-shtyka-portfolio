import {defineArrayMember, defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addVideo from '../../utils/addVideo'

export default function details() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      title: 'Details',
      name: 'details',
      description: 'Details about project (tech, roles, timeline)',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contentSection',
          type: 'object',
          title: 'Content Section',
          fields: [
            defineField({
              name: 'content',
              type: 'array',
              title: 'Content',
              description: 'Set heading and bullet list of items',
              of: [
                defineArrayMember({
                  type: 'block',
                  title: 'Text',
                  styles: [
                    {title: 'Heading', value: 'h4'},
                    {title: 'Body', value: 'normal'},
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    ...addVideo('heroVideo', 'Hero Video'),
  ]
}
