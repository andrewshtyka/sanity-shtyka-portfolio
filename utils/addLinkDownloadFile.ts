export default function addLinkDownloadFile(
  name: string = 'downloadFileLink',
  title: string = 'Download file link',
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
          title: 'Title',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
    },
  ]
}
