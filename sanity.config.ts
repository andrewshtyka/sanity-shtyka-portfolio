import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

const allTypesStringNames = ['home', 'repetitiveUi']

export default defineConfig({
  name: 'default',
  title: 'sanity-shtyka-portfolio',

  projectId: '93zo7q99',
  dataset: 'production',

  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'ua', title: 'Ukrainian'},
      ],
      schemaTypes: allTypesStringNames,
    }),
    visionTool(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages')
          .items([
            // Custom order of pages (in the side bar menu)
            S.documentTypeListItem('repetitiveUi'),
            S.documentTypeListItem('home'),

            // Divider line
            S.divider(),

            // Other types of pages
            ...S.documentTypeListItems().filter((listItem) => {
              const id = listItem.getId()
              return id ? !allTypesStringNames.includes(id) : true
            }),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,

    // Shows 'Add UA version' and 'Add EN version',
    // and hides default 'Add version'
    templates: (prev) => {
      const hiddenTypes = allTypesStringNames
      return prev.filter((template) => {
        return !hiddenTypes.includes(template.id)
      })
    },
  },
})
