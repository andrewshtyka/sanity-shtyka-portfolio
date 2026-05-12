import {defineField} from 'sanity'

export default function i18nUtil() {
  return [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ]
}
