import {defineType} from 'sanity'
import {AsteriskIcon} from '@sanity/icons'
import previewUtilDocuments from '../../utils/previewUtilDocuments'
import i18nUtil from '../../utils/i18nUtil'
import addPageNameHidden from '../../utils/addPageNameHidden'
import experiment from './experiment'

export const experimentType = defineType({
  name: 'experiment',
  type: 'document',
  title: 'Experiment',
  icon: AsteriskIcon,
  fields: [...i18nUtil(), ...addPageNameHidden('Experiment page'), ...experiment()],

  ...previewUtilDocuments(),
})
