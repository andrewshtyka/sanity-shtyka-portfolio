import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addLink from '../../utils/addLink'
import annotationsLink from '../../utils/annotationsLink'
import annotationsImage from '../../utils/annotationsImage'

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
                // Add achievement
                defineField({
                  name: 'achievement',
                  type: 'array',
                  title: 'Achievement',
                  description:
                    'Write on different lines, to make text appear on different lines on website. Select text to attach link to it. Make top text bold.',
                  of: [
                    {
                      type: 'block',
                      title: 'Text',
                      styles: [{title: 'Body', value: 'normal'}],
                      marks: {
                        annotations: [
                          // 1. Link (default)
                          ...annotationsLink(),
                          // 2. Attach image
                          ...annotationsImage(),
                        ],
                      },
                    },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ]
}
