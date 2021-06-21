import React from 'react'
import { Helmet } from 'react-helmet-async'

import { envConfig } from '@/configs'

export const HtmlMeta = (props) => {
  const siteName = props.disableSiteName
    ? ''
    : ` - ${envConfig.NEXT_PUBLIC_SITE_NAME}`

  return (
    <Helmet>
      <title>
        {props.title || ''}
        {siteName}
      </title>
    </Helmet>
  )
}
