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
      description:
        'Add heading for section title (use italic if needed). Add secondary text below, use body style.',
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

    // File name
    {
      name: 'fileName',
      type: 'string',
      title: 'CV / Resume file name',
      description: 'cv-andrew-shtyka-frontend.pdf',
      initialValue: 'cv-andrew-shtyka-frontend.pdf',
    },
  ]
}
