import {defineField} from 'sanity'

export default function addVideo(name: string = 'video', title: string = 'Video') {
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
      ],
    }),
  ]
}
