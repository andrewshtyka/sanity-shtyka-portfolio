import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function resume() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'resume',
      type: 'array',
      title: 'Resume',
      of: [
        // Title and details
        {
          type: 'block',
          title: 'Text',
          styles: [
            {title: 'Heading', value: 'h4'},
            {title: 'Body', value: 'normal'},
          ],
        },
      ],
    }),

    // File
    {
      name: 'file',
      type: 'file',
      title: 'Resume / CV file',
      options: {
        storeOriginalFilename: true,
      },
    },
  ]
}
