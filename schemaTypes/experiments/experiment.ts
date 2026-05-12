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
            // Added
            defineField({
              name: 'releaseDate',
              type: 'datetime',
              title: 'Release date',
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

            // Link
            ...addLink(),

            // Media
            defineField({
              name: 'media',
              type: 'array',
              title: 'Media',
              description: 'Add an image or a video',
              validation: (Rule) => Rule.max(1).error('Виберіть лише один тип медіа'),
              of: [...addImage('imageExperiment'), ...addVideo()],
            }),
          ],
        }),
      ],
    }),

    // ...addVideo('heroVideo', 'Hero Video'),
  ]
}
