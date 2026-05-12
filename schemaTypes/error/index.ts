import {defineType} from 'sanity'
import {ErrorOutlineIcon} from '@sanity/icons'
import previewUtilDocuments from '../../utils/previewUtilDocuments'
import i18nUtil from '../../utils/i18nUtil'
import addPageNameHidden from '../../utils/addPageNameHidden'
import error404 from './error404'
import errorAny from './errorAny'

export const errorType = defineType({
  name: 'error',
  type: 'document',
  title: 'Error',
  icon: ErrorOutlineIcon,
  fields: [...i18nUtil(), ...addPageNameHidden('Error'), ...error404(), ...errorAny()],

  ...previewUtilDocuments(),
})
