interface Prepare {
  title: string
  subtitle: string
  media: any
}

export default function previewUtil() {
  return {
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
        media: 'image',
      },
      prepare({title, subtitle, media}: Prepare) {
        return {
          title: `${title}`,
          subtitle: `${subtitle || ''}`,
          media,
        }
      },
    },
  }
}
