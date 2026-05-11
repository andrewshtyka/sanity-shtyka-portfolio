import {defineField} from 'sanity'

export default function i18nUtil() {
  return [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Language',
      description: 'A convenience for a nice page name in the list',
      initialValue: 'En',
      options: {
        list: ['En', 'Ua'],
        
      },
    }),
  ]
}
