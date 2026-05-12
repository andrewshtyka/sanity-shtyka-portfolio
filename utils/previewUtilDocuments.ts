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
        let langWithEmoji = null

        if (lang) {
          if (lang === 'en') langWithEmoji = `🇺🇸 ${lang.toUpperCase()}`
          else if (lang === 'ua') langWithEmoji = `🇺🇦 ${lang.toUpperCase()}`
        }

        return {
          title: `${title || "Nothing's here yet"}`,
          subtitle: `${lang ? langWithEmoji : 'No language'}`,
        }
      },
    },
  }
}
