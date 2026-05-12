import {defineType} from 'sanity'
import previewUtil from '../../utils/previewUtil'
import i18nUtil from '../../utils/i18nUtil'
import menu from './menu'
import footer from './footer'
import contact from './contact'
import projectPage from './projectPage'
import {EarthGlobeIcon} from '@sanity/icons'

export const globalUiType = defineType({
  name: 'globalUi', //repetitiveUi
  type: 'document',
  title: 'UI content (global)',
  icon: EarthGlobeIcon,
  fields: [...i18nUtil(), ...menu(), ...contact(), ...footer(), ...projectPage()],

  ...previewUtil(),
})
