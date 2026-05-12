import {defineField} from 'sanity'

export default function addImage(name: string = 'image', title: string = 'Image') {
  return [
    defineField({
      name: name,
      type: 'object',
      title: title,
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Image Alt',
          name: 'alt',
          type: 'string',
        },
      ],
    }),
  ]
}
