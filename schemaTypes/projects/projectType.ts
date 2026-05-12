import {defineType} from 'sanity'
import previewUtil from '../../utils/previewUtil'
import i18nUtil from '../../utils/i18nUtil'
import meta from './meta'
import about from './about'
import details from './details'
import content from './content'

export const projectType = defineType({
  name: 'project',
  type: 'document',
  title: 'Project page',
  fields: [...i18nUtil('titleLanguage'), ...meta(), ...about(), ...details(), ...content()],

  ...previewUtil(),
})
