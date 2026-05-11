import {DocumentIcon} from '@sanity/icons'

export default function annotationsFile(
  name: string = 'fileDownload',
  title: string = 'File Download',
) {
  return [
    {
      name: name,
      type: 'object',
      title: title,
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
  ]
}
