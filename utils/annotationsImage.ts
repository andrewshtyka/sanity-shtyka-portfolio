import {ImageIcon} from '@sanity/icons'

export default function annotationsImage(
  name: string = 'imageAttached',
  title: string = 'Image Attach',
) {
  return [
    {
      name: name,
      type: 'object',
      title: title,
      icon: ImageIcon,
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Image Alt',
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ]
}
