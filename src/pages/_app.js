import Init from '@/app/Init'
import { ErrorBoundary } from '@/components'
import { MasterLayout } from '@/layouts'
import '@/locales/i18n'
import { DISABLE_SSR_TRANSITION } from '@/pages/_document'
import store from '@/store'
import { isServer } from '@/utils'
import { message, Spin } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import dynamic from 'next/dynamic'

import 'nprogress/nprogress.css'
require('@/styles/global.less')

message.config({
  top: 10,
  maxCount: 1
})

const TopProgressBar = dynamic(
  () => {
    return import('@/components/TopProgressBar')
  },
  { ssr: false },
)

export default function CustomApp({ Component, pageProps }) {
  const componentDom = <Component {...pageProps} />
  const layoutDom = <MasterLayout>{componentDom}</MasterLayout>

  useEffect(() => {
    // avoid CSS animation flashing
    if (!isServer()) {
      const disableTransitionDom = document.getElementById(
        DISABLE_SSR_TRANSITION,
      )

      if (disableTransitionDom) {disableTransitionDom.remove()}
    }
  }, [])

  return (
    <Provider store={store}>
      <Init>
        <ErrorBoundary>
          <div id="root">
            <TopProgressBar />
            <HelmetProvider>{layoutDom}</HelmetProvider>
          </div>
        </ErrorBoundary>
      </Init>
    </Provider>
  )
}
