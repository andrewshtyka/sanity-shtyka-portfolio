import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addVideo from '../../utils/addVideo'
import annotationsLink from '../../utils/annotationsLink'
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
                  // 2. Attach downloadable file to link
                  ...annotationsFile(),
                ],
              },
            },
          ],
        },
      ],
    }),
  ]
}
