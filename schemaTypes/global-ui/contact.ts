import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addVideo from '../../utils/addVideo'

export default function contact() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'contact',
      type: 'object',
      title: 'Contact',
      fields: [
        // Title
        defineField({
          name: 'title',
          type: 'array',
          title: 'Title',
          description: 'Put title here, use Heading style. Apply normal and italic.',
          of: [
            {
              type: 'block',
              title: 'Text',
              styles: [{title: 'Heading', value: 'h4'}],
            },
          ],
        }),

        // Video
        defineField({
          name: 'video',
          type: 'object',
          title: 'Video',
          fields: [
            // Show / Hide video UI
            {
              name: 'isVideoVisible',
              type: 'boolean',
              title: 'Show video?',
              initialValue: true,
              options: {
                list: [
                  {title: 'Visible', value: true},
                  {title: 'Hidden', value: false},
                ],
                layout: 'radio',
              },
            },

            {
              name: 'video',
              type: 'file',
              title: 'Video file',
              options: {
                accept: 'video/*',
              },
              hidden: ({parent}) => !parent?.isVideoVisible,
            },
            {
              name: 'poster',
              type: 'image',
              title: 'Video Poster',
              description:
                'In case of slow internet connection, poster will be shown while video is being loaded',
              hidden: ({parent}) => !parent?.isVideoVisible,
            },
          ],
        }),
        // ...addVideo(),

        // Image
        defineField({
          name: 'image',
          type: 'object',
          title: 'Image',
          fields: [
            // Show / Hide image UI
            {
              name: 'isImageVisible',
              type: 'boolean',
              title: 'Show image?',
              initialValue: true,
              options: {
                list: [
                  {title: 'Visible', value: true},
                  {title: 'Hidden', value: false},
                ],
                layout: 'radio',
              },
            },

            {
              name: 'image',
              type: 'image',
              title: 'Image',
              hidden: ({parent}) => !parent?.isImageVisible,
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Image Alt',
              hidden: ({parent}) => !parent?.isImageVisible,
            },
          ],
        }),

        // Text with links
        {
          name: 'message',
          type: 'array',
          title: 'Message',
          of: [
            {
              type: 'block',
              styles: [{title: 'Body', value: 'normal'}],
            },
          ],
        },

        // Attach file (CV)
        {
          name: 'file',
          type: 'file',
          title: 'File (CV)',
          options: {
            storeOriginalFilename: true,
          },
        },

        // File name
        {
          name: 'fileName',
          type: 'string',
          title: 'CV / Resume file name',
          description: 'cv-andrew-shtyka-frontend.pdf',
          initialValue: 'cv-andrew-shtyka-frontend.pdf',
        },
      ],
    }),
  ]
}
