import {defineField} from 'sanity'

export default function addVideoProject(name: string = 'video', title: string = 'Video') {
  return [
    defineField({
      name: name,
      type: 'object',
      title: title,
      fields: [
        {
          name: 'video',
          type: 'file',
          title: 'Video file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'poster',
          type: 'image',
          title: 'Video Poster',
          description:
            'In case of slow internet connection, poster will be shown while video is being loaded',
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
