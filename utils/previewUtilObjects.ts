export default function previewUtilObjects(defaultTitle: string = 'Media') {
  return {
    preview: {
      prepare() {
        return {
          title: `${defaultTitle}`,
        }
      },
    },
  }
}
