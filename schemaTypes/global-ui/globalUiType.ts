import {defineType} from 'sanity'
import previewUtil from '../../utils/previewUtil'
import i18nUtil from '../../utils/i18nUtil'
import menu from './menu'
import footer from './footer'
import contact from './contact'

export const globalUiType = defineType({
  name: 'globalUi', //repetitiveUi
  type: 'document',
  title: 'UI content (globally accessible)',
  fields: [...i18nUtil(), ...menu(), ...contact(), ...footer()],

  ...previewUtil(),
})
