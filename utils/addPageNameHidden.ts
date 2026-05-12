import {defineField} from 'sanity'

export default function addPageNameHidden(value: string = 'Page') {
  return [
    defineField({
      name: 'title',
      type: 'text',
      initialValue: value,
      readOnly: true,
      hidden: true,
    }),
  ]
}
