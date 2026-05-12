import {defineType} from 'sanity'
import previewUtilDocuments from '../../utils/previewUtilDocuments'
import i18nUtil from '../../utils/i18nUtil'
import hero from './hero'
import about from './about'
import experience from './experience'
import achievements from './achievements'
import clients from './clients'
import resume from './resume'
import projects from './projects'
import experiments from './experiments'
import addPageNameHidden from '../../utils/addPageNameHidden'
import {HomeIcon} from '@sanity/icons'

export const homeType = defineType({
  name: 'home',
  type: 'document',
  title: 'Home page',
  icon: HomeIcon,
  fields: [
    ...i18nUtil(),
    ...addPageNameHidden('Home page'),
    ...hero(),
    ...about(),
    ...experience(),
    ...achievements(),
    ...clients(),
    ...resume(),
    ...projects(),
    ...experiments(),
  ],

  ...previewUtilDocuments(),
})
