import cx from 'classnames'
import React from 'react'
import styles from './styles.module.less'

function AuthLayout(props) {
  return (
    <div className={cx(
      styles['comp-wrapper'],
      {
        [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode
      },
      props.className,
      'h-100'
    )}
    style={props.style}>
      {props.children}
    </div>
  )
}

export default AuthLayout