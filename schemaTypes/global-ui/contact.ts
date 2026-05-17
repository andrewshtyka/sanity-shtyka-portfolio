import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addVideo from '../../utils/addVideo'
import annotationsFile from '../../utils/annotationsFile'

export default function contact() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'contact',
      type: 'object',
      title: 'Contact',
      fields: [
        // Title
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          description: 'Put title here, use Heading style. Apply normal and italic.',
          of: [
            {
              type: 'block',
              title: 'Text',
              styles: [{title: 'Heading', value: 'h4'}],
            },
          ],
        }),

        // Video
        ...addVideo(),

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

        // Attach file (CV)
        {
          name: 'file',
          type: 'file',
          title: 'File (CV)',
          options: {
            storeOriginalFilename: true,
          },
        },
      ],
    }),
  ]
}
