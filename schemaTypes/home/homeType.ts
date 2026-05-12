import {defineType} from 'sanity'
import previewUtil from '../../utils/previewUtil'
import i18nUtil from '../../utils/i18nUtil'
import hero from './hero'
import about from './about'
import experience from './experience'
import achievements from './achievements'
import clients from './clients'
import resume from './resume'
import projects from './projects'
import experiments from './experiments'

export const homeType = defineType({
  name: 'home',
  type: 'document',
  title: 'Home page',
  fields: [
    ...i18nUtil(),
    ...hero(),
    ...about(),
    ...experience(),
    ...achievements(),
    ...clients(),
    ...resume(),
    ...projects(),
    ...experiments(),
  ],

  ...previewUtil(),
})
