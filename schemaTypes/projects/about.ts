import {defineField} from 'sanity'
import {Divider} from '../../components/Divider'

export default function about() {
  return [
    defineField({
      name: 'about',
      type: 'object',
      title: 'About',
      components: {
        field: Divider,
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
          description: 'Short description of the project (40-45 chars)',
        },

        // button visibility
        {
          name: 'isButtonVisible',
          type: 'boolean',
          title: 'Show button?',
          description: 'Must be always visible, except for my website',
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
          name: 'buttonTitle',
          type: 'string',
          title: 'Button title',
          description: 'Text inside the button',
          initialValue: 'Visit website',
          hidden: ({parent}) => !parent?.isButtonVisible,
        },
        {
          name: 'link',
          type: 'url',
          title: 'Website Link',
          hidden: ({parent}) => !parent?.isButtonVisible,
        },
      ],
    }),
  ]
}
