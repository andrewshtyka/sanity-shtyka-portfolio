import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function menu() {
  return [
    // defineField({
    //   components: {
    //     field: Divider,
    //   },
    //   name: 'logoSvg',
    //   type: 'object',
    //   title: 'Logo SVG',
    //   fields: [
    //     defineField({
    //       name: 'svg',
    //       type: 'image',
    //       title: 'SVG file',
    //     }),
    //     defineField({
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alt text',
    //     }),
    //   ],
    // }),

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
