import cx from 'classnames'
import React from 'react'

import styles from './styles.module.less'

export const PageContainer = (props) => (
  <div
    className={cx(
      styles['comp-wrapper'],
      { [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
    )}
    style={props.style}
  >
    {props.children}
  </div>
)
