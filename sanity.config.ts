import {defineConfig, SchemaTypeDefinition} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {allTypesStringNames, schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'sanity-shtyka-portfolio',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: '🇺🇸 Eng : '},
        {id: 'ua', title: '🇺🇦 Ukr : '},
      ],
      schemaTypes: allTypesStringNames,
    }),
    visionTool(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages')
          .items([
            S.documentTypeListItem('home'),
            S.documentTypeListItem('project'),
            S.documentTypeListItem('experiment'),

            S.divider(),
            S.documentTypeListItem('globalUi'),
            S.documentTypeListItem('error'),
            S.divider(),

            ...S.documentTypeListItems().filter((listItem) => {
              const id = listItem.getId()
              return id ? !allTypesStringNames.includes(id) : true
            }),
          ]),
    }),
    media(),
  ],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],

    // Show 'Add UA version' and 'Add EN version',
    // and hide default 'Add version'
    templates: (prev) => {
      const hiddenTypes = allTypesStringNames
      return prev.filter((template) => {
        return !hiddenTypes.includes(template.id)
      })
    },
  },
})
