import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import jpTranslations from './jp/translations.json'
import enTranslations from './en/translations.json'
import enValidation from './en/validation.json'
import jpValidation from './jp/validation.json'
import enError from './en/error.json'
import jpError from './jp/error.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translations: enTranslations,
        validation: enValidation,
        error: enError
      },
      jp: {
        translations: jpTranslations,
        validation: jpValidation,
        error: jpError
      }
    },
    lng:
      typeof window !== 'undefined'
        && window.localStorage.getItem('lang')
        && localStorage.getItem('lang') === 'en'
        ? 'en'
        : 'jp',
    fallbackLng: ['jp', 'en'],
    debug: false,
    ns: ['translations', 'validation', 'error'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      // wait: true
    }
  })

export default i18n
