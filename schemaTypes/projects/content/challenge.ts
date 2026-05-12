import {defineArrayMember} from 'sanity'
import {BoltIcon} from '@sanity/icons'

export default function challenge(name: string = 'challenge', title: string = 'Challenge') {
  return [
    defineArrayMember({
      name: name,
      type: 'object',
      title: title,
      icon: BoltIcon,
      fields: [
        {
          name: 'challenge',
          type: 'text',
          title: 'Challenge',
        },
      ],
    }),
  ]
}
