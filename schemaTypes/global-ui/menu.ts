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
      type: 'object',
      title: 'Menu mobile name',
      fields: [
        {
          name: 'open',
          type: 'string',
          title: 'Name for open menu button',
          initialValue: 'Menu',
          description: 'Menu',
        },
        {
          name: 'close',
          type: 'string',
          title: 'Name for close menu button',
          initialValue: 'Close',
          description: 'Close',
        },
      ],
    }),
  ]
}
