import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function projects() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'projects',
      type: 'array',
      title: 'Projects',
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
    // Button
    defineField({
      name: 'buttonTitle',
      type: 'string',
      title: 'Button title',
      description: 'Text inside the button, that leads to the project',
      initialValue: 'See case study',
    }),
  ]
}
