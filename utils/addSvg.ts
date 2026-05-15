import {defineField} from 'sanity'

export default function addSvg(name: string = 'svg', title: string = 'SVG') {
  return [
    defineField({
      name: name,
      type: 'object',
      title: title,
      fields: [
        {
          name: 'svg',
          type: 'image',
          title: 'SVG',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Image Alt',
        },
      ],
    }),
  ]
}
