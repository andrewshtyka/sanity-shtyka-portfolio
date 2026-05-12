import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function clients() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'clients',
      type: 'array',
      title: 'Clients',
      of: [
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
