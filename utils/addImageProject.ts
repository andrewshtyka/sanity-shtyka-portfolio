import {defineField} from 'sanity'

export default function addImageProject(name: string = 'image', title: string = 'Image') {
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

        // Card Width
        {
          name: 'cardWidth',
          type: 'number',
          title: 'Card width',
          description: "There're 2 columns on project page. 1 takes 1 column, 2 is full width",
          initialValue: 2,
          options: {
            list: [
              {title: '1 col', value: 1},
              {title: '2 cols', value: 2},
            ],
            layout: 'radio',
          },
        },
      ],
    }),
  ]
}
