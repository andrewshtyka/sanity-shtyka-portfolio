interface Props {
  title?: string
  lang?: string
}

export default function previewUtilDocuments() {
  return {
    preview: {
      select: {
        title: 'title',
        lang: 'language',
      },
      prepare({title, lang}: Props) {
        return {
          title: `${title || "Nothing's here yet"}`,
          subtitle: `${lang ? lang.toUpperCase() : 'No language'}`,
        }
      },
    },
  }
}
