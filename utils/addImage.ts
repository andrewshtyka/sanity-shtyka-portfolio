import {defineField} from 'sanity'

export default function addImage(name: string = 'image', title: string = 'Image') {
  return [
    defineField({
      name: name,
      type: 'object',
      title: title,
      fields: [
        // Card Width
        {
          name: 'cardWidth',
          type: 'number',
          title: 'Card width',
          description: "There're 3 columns on home page. 1 takes 1 column, 2 take 2, etc.",
          initialValue: 3,
          options: {
            list: [
              {title: '1 col', value: 1},
              {title: '2 cols', value: 2},
              {title: '3 cols', value: 3},
            ],
            layout: 'radio',
          },
        },

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
