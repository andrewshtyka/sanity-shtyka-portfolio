import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function experiments() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'experiments',
      type: 'array',
      title: 'Experiments',
      of: [
        // Title and subtitle
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
  ]
}
