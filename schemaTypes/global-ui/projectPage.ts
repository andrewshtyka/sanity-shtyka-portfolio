import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function projectPage() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'projectPage',
      type: 'object',
      title: 'Project Page',
      fields: [
        // Sections title
        defineField({
          name: 'contentTitle',
          type: 'string',
          title: 'Content Title',
          initialValue: 'Challenges & Solutions',
          description: 'Heading of the content sections',
        }),

        // Challenge card
        defineField({
          name: 'challengeTitle',
          type: 'string',
          title: 'Challenge title',
          initialValue: 'Challenge',
          description: 'Heading of the white card with challenge description',
        }),

        // Navigation bar title
        defineField({
          name: 'navTitle',
          type: 'string',
          title: 'Navigation bar title',
          initialValue: 'Challenges',
          description: 'Heading of the floating nav bar',
        }),

        // Project end text
        defineField({
          name: 'endText',
          type: 'string',
          title: 'Project end text',
          initialValue: '[ The end ]',
        }),
      ],
    }),
  ]
}
