import {defineArrayMember} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

export default function solution(name: string = 'solution', title: string = 'Solution') {
  return [
    defineArrayMember({
      name: name,
      type: 'object',
      title: title,
      icon: BulbOutlineIcon,
      description: 'One solution = one paragraph',
      fields: [
        {
          title: 'Solution',
          name: 'solution',
          type: 'text',
        },
      ],
    }),
  ]
}
