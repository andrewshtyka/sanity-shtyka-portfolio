export default function addLink(name: string = 'link', title: string = 'Link') {
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
