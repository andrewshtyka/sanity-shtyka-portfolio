import {defineField, defineType} from 'sanity'
import previewUtil from '../utils/previewUtil'
import i18nUtil from '../utils/i18nUtil'
import addVideo from '../utils/addVideo'
import {Divider} from '../components/Divider'
import {DocumentIcon} from '@sanity/icons'

export const repetitiveUiType = defineType({
  name: 'repetitiveUi',
  type: 'document',
  title: 'UI content (repetitive)',
  fields: [
    ...i18nUtil(),

    // #region ============================== Menu
    defineField({
      components: {
        field: Divider,
      },
      name: 'menu',
      type: 'array',
      title: 'Menu',
      of: [
        defineField({
          name: 'item',
          type: 'string',
          title: 'Item',
        }),
      ],
    }),
    // #endregion ===========================

    // #region ============================== Contact
    defineField({
      components: {
        field: Divider,
      },
      name: 'contact',
      type: 'object',
      title: 'Contact',
      fields: [
        {
          name: 'title1',
          type: 'string',
          title: 'Title line 1',
        },
        {
          name: 'title2',
          type: 'string',
          title: 'Title line 2',
        },
        ...addVideo(),
        {
          name: 'message',
          type: 'array',
          title: 'Message',

          of: [
            {
              type: 'block',
              styles: [{title: 'Body', value: 'normal'}],
              marks: {
                annotations: [
                  // 1. Link (default)
                  {
                    name: 'link',
                    type: 'object',
                    title: 'External Link',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                        description: 'Add link, email (mailto:) or phone number (tel:)',
                        validation: (Rule) =>
                          Rule.uri({
                            allowRelative: true,
                            scheme: ['http', 'https', 'mailto', 'tel'],
                          }),
                      },
                    ],
                  },
                  // 2. Attach downloadable file to link
                  {
                    name: 'fileDownload',
                    type: 'object',
                    title: 'File Download',
                    icon: DocumentIcon,
                    fields: [
                      {
                        name: 'file',
                        type: 'file',
                        title: 'File',
                        options: {
                          storeOriginalFilename: true,
                        },
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    }),
    // #endregion ===========================

    // #region ============================== Footer
    defineField({
      components: {
        field: Divider,
      },
      name: 'footer',
      type: 'object',
      title: 'Footer',
      fields: [
        {
          name: 'item1',
          type: 'string',
          title: 'Item 1',
        },
        {
          name: 'item2',
          type: 'string',
          title: 'Item 2',
        },
        {
          name: 'item3',
          type: 'string',
          title: 'Item 3',
        },
        defineField({
          name: 'item4',
          type: 'object',
          title: 'Item 4',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'content',
              type: 'string',
              title: 'Content',
            },
          ],
        }),
        {
          name: 'item5',
          type: 'string',
          title: 'Item 5',
        },
        {
          name: 'item6',
          type: 'string',
          title: 'Item 6',
        },
      ],
    }),

    // #endregion ===========================
  ],

  ...previewUtil(),
})
