import React from 'react'
import cx from 'classnames'
import { Spin } from 'antd'
import { SpinProps } from 'antd/lib/spin'

import styles from './style.module.less'

export const LazyLoadingSpin = (props) => (
  <Spin
    delay={props.delay}
    className={cx(
      styles['comp-wrapper'],
      {
        [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode,
        [styles['comp-wrapper--fullscreen']]: !!props.fullscreen,
      },
      props.className,
    )}
    style={props.style}
  />
)
