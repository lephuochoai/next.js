
import Message from '@/components/Message'
import i18n from '@/locales/i18n'

function successHelper(msg) {
  if (msg) {
    return Message.success(i18n.t(msg))
  }
  return Message.success(i18n.t('successfully'))
}

export default successHelper
