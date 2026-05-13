import {defineField} from 'sanity'

export default function addImage(name: string = 'image', title: string = 'Image') {
  return [
    defineField({
      name: name,
      type: 'object',
      title: title,
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
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
