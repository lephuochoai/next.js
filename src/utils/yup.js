import * as yup from 'yup'
import i18n from '@/locales/i18n'

yup.setLocale({
  mixed: {
    required: i18n.t('validation:required'),
    default: ({ path }) => `${i18n.t(path)} ${i18n.t('invalid')}`,
  },
  string: {
    email: i18n.t('validation:email'),
    min: ({ min }) => i18n.t('validation:minLength', { min }),
    max: ({ max }) => i18n.t('validation:maxLength', { max }),
  },
  number: {
    min: ({ min }) => i18n.t('validation:min', { min }),
    max: ({ max }) => i18n.t('validation:max', { max })
  }
})

export default yup
