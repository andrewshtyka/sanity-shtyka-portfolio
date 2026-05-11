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
        {
          name: 'title1',
          type: 'string',
          title: 'Title line 1',
        },
        {
          name: 'title2',
          type: 'string',
          title: 'Title line 2',
        },
        ...addVideo(),
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
