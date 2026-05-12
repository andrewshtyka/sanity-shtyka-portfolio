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
        // Title
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

        // Video
        ...addVideo(),
      ],
    }),
  ]
}
