import {defineField, defineType} from 'sanity'
import previewUtil from '../utils/previewUtil'
import i18nUtil from '../utils/i18nUtil'

export const homeType = defineType({
  name: 'home',
  type: 'document',
  title: 'Home page',
  fields: [...i18nUtil()],
  ...previewUtil(),
})
