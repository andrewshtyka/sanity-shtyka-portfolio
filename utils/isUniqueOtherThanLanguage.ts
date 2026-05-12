// original function here:
// https://github.com/sanity-io/document-internationalization/blob/main/docs/05-allowing-the-same-slug-for-translations.md

import {SlugValidationContext} from 'sanity'

// Create the function
// This checks that there are no other documents
// With this published, draft or version _id
// Or this schema type

// With the same slug and language
export async function isUniqueOtherThanLanguage(slug: string, context: SlugValidationContext) {
  const {document, getClient} = context
  if (!document?.language) {
    return true
  }
  const client = getClient({apiVersion: '2025-02-19'})
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    id,
    language: document.language,
    slug,
  }
  const query = `!defined(*[
    !(sanity::versionOf($id)) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`
  const result = await client.fetch(query, params)
  return result
}
