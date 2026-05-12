import {defineType} from 'sanity'
import previewUtilDocuments from '../../utils/previewUtilDocuments'
import i18nUtil from '../../utils/i18nUtil'
import menu from './menu'
import footer from './footer'
import contact from './contact'
import projectPage from './projectPage'
import {EarthGlobeIcon} from '@sanity/icons'
import addPageNameHidden from '../../utils/addPageNameHidden'

export const globalUiType = defineType({
  name: 'globalUi',
  type: 'document',
  title: 'UI content (global)',
  icon: EarthGlobeIcon,
  fields: [
    ...i18nUtil(),
    ...addPageNameHidden('UI content (global)'),
    ...menu(),
    ...contact(),
    ...footer(),
    ...projectPage(),
  ],

  ...previewUtilDocuments(),
})
