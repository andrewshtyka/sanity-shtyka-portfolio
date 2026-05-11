export default function annotationsLink(name: string = 'link', title: string = 'External Link') {
  return [
    {
      name: name,
      type: 'object',
      title: title,
      fields: [
        {
          name: 'href',
          type: 'url',
          title: 'URL',
          description: 'Add link, email (mailto:) or phone number (tel:)',
          validation: (Rule: any) =>
            Rule.uri({
              allowRelative: true,
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    },
  ]
}
