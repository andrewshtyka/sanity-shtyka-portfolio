import {defineArrayMember, defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addSvg from '../../utils/addSvg'
import addImage from '../../utils/addImage'

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
        // Text with links
        {
          name: 'message',
          type: 'array',
          title: 'Message',
          of: [
            {
              type: 'block',
              styles: [{title: 'Body', value: 'normal'}],
            },
          ],
        },

        // Add images (to be attached to the text above)
        {
          name: 'images',
          type: 'array',
          title: 'Images (to be attached to text above)',
          of: [
            defineArrayMember({
              name: 'imageContent',
              type: 'object',
              title: 'Image content',
              fields: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Image Alt',
                },
              ],
            }),
          ],
        },

        // Image (svg)
        ...addSvg('svg', 'SVG Sign'),

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
