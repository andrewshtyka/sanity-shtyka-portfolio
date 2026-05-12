import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function menu() {
  return [
    defineField(
      // Image (svg)
      {
        name: 'svg',
        type: 'image',
        title: 'Logo SVG',
      },
    ),

    defineField({
      components: {
        field: Divider,
      },
      name: 'menu',
      type: 'array',
      title: 'Menu',
      of: [
        defineField({
          name: 'item',
          type: 'string',
          title: 'Item',
        }),
      ],
    }),
  ]
}
