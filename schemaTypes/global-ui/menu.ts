import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function menu() {
  return [
    // Menu items
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

    // Mobile menu name
    defineField({
      name: 'menuMobile',
      type: 'string',
      title: 'Menu mobile name',
    }),
  ]
}
