import {defineArrayMember, defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import addLink from '../../utils/addLink'
import addImage from '../../utils/addImage'
import addVideo from '../../utils/addVideo'

export default function experiment() {
  return [
    defineField({
      components: {
        field: Divider,
      },
      name: 'experiments',
      type: 'array',
      title: 'Experiments',
      description: 'Content of experiments (1 item = 1 experiment). New at the bottom.',
      of: [
        defineArrayMember({
          name: 'item',
          type: 'object',
          title: 'Item content',
          fields: [
            // Id
            defineField({
              name: 'customId',
              type: 'number',
              title: 'ID of experiment',
              description: 'Set it by yourself',
            }),

            // Title and subtitle
            defineField({
              name: 'content',
              type: 'object',
              title: 'Content',
              description: 'Set heading and bullet list of items',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'description',
                  type: 'string',
                  title: 'Description',
                },
              ],
            }),

            // Card Width
            {
              name: 'cardWidth',
              type: 'number',
              title: 'Card width',
              description: "There're 3 columns on website. 1 takes 1 column, 2 take 2, and so on. ",
              initialValue: 1,
              options: {
                list: [
                  {title: '1 col', value: 1},
                  {title: '2 cols', value: 2},
                  {title: '3 cols', value: 3},
                ],
                layout: 'radio',
              },
            },

            // Link
            ...addLink(),

            // Media
            defineField({
              name: 'media',
              type: 'array',
              title: 'Media',
              description: 'Add an image or a video',
              validation: (Rule) => Rule.max(1),
              of: [...addImage('imageExperiment'), ...addVideo()],
            }),
          ],
        }),
      ],
    }),

    // ...addVideo('heroVideo', 'Hero Video'),
  ]
}
