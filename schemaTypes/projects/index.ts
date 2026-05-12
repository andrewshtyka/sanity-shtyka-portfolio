import {defineType} from 'sanity'
import previewUtilDocuments from '../../utils/previewUtilDocuments'
import i18nUtil from '../../utils/i18nUtil'
import meta from './meta'
import about from './about'
import details from './details'
import content from './content'
import {ProjectsIcon} from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: ProjectsIcon,
  fields: [...i18nUtil(), ...meta(), ...about(), ...details(), ...content()],

  ...previewUtilDocuments(),
})
