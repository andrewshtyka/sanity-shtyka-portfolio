import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addVideo from '../../utils/addVideo'
import addLink from '../../utils/addLink'
import addDownloadFile from '../../utils/addDownloadFile'

export default function hero() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        defineField({
          name: 'heroTitle',
          type: 'array',
          title: 'Hero title',
          description: 'Put title here, use Heading style. Apply normal and italic.',
          of: [
            // Title
            {
              type: 'block',
              title: 'Text',
              styles: [{title: 'Heading', value: 'h4'}],
            },
          ],
        }),

        // Subtitle
        {
          name: 'subtitle',
          type: 'array',
          title: 'Subtitle',
          description: 'Highlight word with <code>',
          of: [
            {
              type: 'block',
              styles: [{title: 'Body', value: 'normal'}],
            },
          ],
        },

        // Tags
        {
          name: 'tags',
          type: 'array',
          title: 'Tags',
          of: [...addLink()],
        },

        // Link to download file
        ...addDownloadFile('resume', 'Resume / CV file'),

        // File name
        {
          name: 'fileName',
          type: 'string',
          title: 'CV / Resume file name',
          description: 'cv-andrew-shtyka-frontend.pdf',
          initialValue: 'cv-andrew-shtyka-frontend.pdf',
        },

        // Video
        ...addVideo(),
      ],
    }),
  ]
}
