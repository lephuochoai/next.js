import cx from 'classnames'
import React from 'react'
import Header from '@/components/Header/Header'
import styles from './styles.module.less'

export const PageContainer = (props) => (
  <div
    className={cx(
      styles['comp-wrapper'],
      {
        [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode
      },
      props.className,
      'h-100'
    )}
    style={props.style}
  >
    <Header />
    <div className={cx(styles['body-page'])}>
      {props.children}
    </div>
  </div>
)
