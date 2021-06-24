import { genId } from '@/utils/funcs'
import { message } from 'antd'

const TYPE_MESSAGE = {
  SUCCESS: 1,
  ERROR: 2,
  WARNING: 3
}

function getConfig(text, type) {
  const keyMess = genId()
  const config = {
    content: text,
    key: keyMess,
    onClick() {
      message.destroy(keyMess)
    }
  }

  switch (type) {
  case TYPE_MESSAGE.SUCCESS:
    config.className = 'message__custom message__custom-success'
    break
  case TYPE_MESSAGE.ERROR:
    config.className = 'message__custom message__custom-error'
    break
  case TYPE_MESSAGE.WARNING:
    config.className = 'message__custom message__custom-warning'
    break
  default:
    break
  }
  return config
}

const Message = {
  success: (text) => message.success(getConfig(text, TYPE_MESSAGE.SUCCESS)),
  error: (text) => message.error(getConfig(text, TYPE_MESSAGE.ERROR)),
  warning: (text) => message.warning(getConfig(text, TYPE_MESSAGE.WARNING))
}

export default Message
