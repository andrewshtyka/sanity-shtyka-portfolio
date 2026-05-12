import {defineField} from 'sanity'
import {isUniqueOtherThanLanguage} from '../../utils/isUniqueOtherThanLanguage'

export default function meta() {
  return [
    // Project title
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),

    // Project slug
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Project Page Slug',
      description: 'Generated based on project title',
      options: {
        source: 'title',
        isUnique: isUniqueOtherThanLanguage,
      },
    }),

    // Date of creation
    defineField({
      name: 'createdAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ]
}
