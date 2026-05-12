import {defineArrayMember, defineField} from 'sanity'
import {Divider} from '../../components/Divider'
import {ImagesIcon} from '@sanity/icons'
import challenge from './content/challenge'
import solution from './content/solution'
import addImage from '../../utils/addImage'
import addVideo from '../../utils/addVideo'
import previewUtilObjects from '../../utils/previewUtilObjects'

export default function content() {
  return [
    // Sections content
    defineField({
      components: {
        field: Divider,
      },
      name: 'section',
      type: 'array',
      title: 'Section',
      description:
        'One section = one set of texts for challenge, solutions, images and videos. Add as much sections as needed.',

      // One section content
      of: [
        defineArrayMember({
          name: 'item',
          type: 'object',
          title: 'Item',
          fields: [
            defineField({
              name: 'content',
              type: 'array',
              title: 'Content',
              description: 'Type short challenge name - will be used for navigation floating bar',

              // Items of content section
              of: [
                // 1. Add names for navigation links
                defineArrayMember({
                  type: 'block',
                  title: 'Text',
                  styles: [{title: 'Body', value: 'normal'}],
                }),

                // 2. Add challenge text
                ...challenge(),

                // 3. Add solution text
                ...solution(),

                // 4. Media (array)
                defineArrayMember({
                  name: 'media',
                  type: 'object',
                  title: 'Media',
                  icon: ImagesIcon,
                  ...previewUtilObjects(),
                  fields: [
                    defineField({
                      name: 'items',
                      type: 'array',
                      title: 'Items',
                      description: 'Add images and videos',
                      of: [...addImage('imageDetails'), ...addVideo()],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ]
}
