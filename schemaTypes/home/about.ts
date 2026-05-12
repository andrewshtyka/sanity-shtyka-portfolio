import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import annotationsLink from '../../utils/annotationsLink'
import annotationsImage from '../../utils/annotationsImage'

export default function about() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'about',
      type: 'object',
      title: 'About',
      fields: [
        // Text with attachments (link, file)
        {
          name: 'message',
          type: 'array',
          title: 'Message',
          of: [
            {
              type: 'block',
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
        },

        // Image (svg)
        {
          name: 'svg',
          type: 'image',
          title: 'SVG Sign',
        },

        // Details text
        defineField({
          name: 'details',
          type: 'array',
          title: 'Details',
          description:
            'Write on different lines, to make text appear on different lines on website',
          of: [
            {
              type: 'block',
              title: 'Text',
              styles: [{title: 'Body', value: 'normal'}],
            },
          ],
        }),
      ],
    }),
  ]
}
