import React from 'react'
import styles from './styles.module.less'
import cx from 'classnames'
import { HtmlMeta } from '@/components'
import { Button } from 'antd'
import { useRouter } from 'next/router'

export const Custom404 = () => {
  const router = useRouter()
  const onGoHomepage = () => {
    router.push('/')
  }
  return (
    <div
      className="d-flex justify-content-center
        align-items-center h-100 flex-column">
      <HtmlMeta title="404: This page could not be found" />
      <div className="d-flex align-items-center mb-2">
        <h4 className={cx(styles['title'])}>404</h4>
        <div>This page could not be found.</div>
      </div>
      <Button type="primary" onClick={onGoHomepage}>Go homepage</Button>
    </div>
  )
}
