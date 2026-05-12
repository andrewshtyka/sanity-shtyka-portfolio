import {defineField} from 'sanity'

export default function i18nUtil(name: string = 'title') {
  return [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: name,
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
