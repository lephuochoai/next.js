
import Breadcrumbs from '@/utils/breadcrumbs'
import Message from '@/components/Message'
import STATUS_REQUEST from '@/constants/StatusRequest'
import i18n from '@/locales/i18n'
import store from '@/store'
import { removeAccount } from '@/store/slices/accountSlice'
import Router from 'next/router'

function errorHelper(err) {

  const statusCode = err?.response?.data?.code || err?.data?.code || 500
  const messageError = err?.response?.data?.message || err?.data?.message

  if (statusCode === STATUS_REQUEST.SYSTEM_ERROR) {
    return Message.error(i18n.t('error:system_error'))
  }

  if (statusCode === STATUS_REQUEST.UNAUTHORIZED) {
    const urlDirect = Router.pathname
    store.dispatch(
      removeAccount()
    )
    localStorage.removeItem('token')
    Router.push(`${Breadcrumbs.LOGIN}?redirect=${urlDirect}`)
  }

  if (messageError) {
    return Message.error(i18n.t(`error:${messageError}`))
  }
}

export default errorHelper
