export default function addDownloadFile(
  name: string = 'downloadFileLink',
  title: string = 'Download file',
) {
  return [
    {
      name: name,
      type: 'object',
      title: title,
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Button title',
        },
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
