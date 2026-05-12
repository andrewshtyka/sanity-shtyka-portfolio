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

        // Details
        {
          name: 'details1',
          type: 'string',
          title: 'Details line 1',
        },
        {
          name: 'details2',
          type: 'string',
          title: 'Details line 2',
        },
      ],
    }),
  ]
}
