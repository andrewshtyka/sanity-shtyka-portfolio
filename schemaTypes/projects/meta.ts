import {defineField} from 'sanity'
import {isUniqueOtherThanLanguage} from '../../utils/isUniqueOtherThanLanguage'

export default function meta() {
  return [
    // Project title
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
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
      name: 'releaseDate',
      type: 'datetime',
      title: 'Project release date',
      initialValue: () => new Date().toISOString(),
    }),
  ]
}
