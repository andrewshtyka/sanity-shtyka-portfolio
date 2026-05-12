interface Props {
  title?: string
  subtitle?: string
  lang?: string
  media?: any
}

export default function previewUtil() {
  return {
    preview: {
      select: {
        title: 'title',
        // subtitle: 'description',
        lang: 'language',
        media: 'image',
      },
      prepare({title, subtitle, lang, media}: Props) {
        return {
          title: `${title}`,
          subtitle: `${lang ? lang.toUpperCase() : 'No language'}`,
          media,
        }
      },
    },
  }
}
