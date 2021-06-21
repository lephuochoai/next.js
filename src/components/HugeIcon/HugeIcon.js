import cx from 'classnames'

import styles from './style.module.less'

export const HugeIcon = (props) => (
  <div
    className={cx(
      styles['comp-wrapper'],
      { [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
    )}
    style={props.style}
  >
    {props.icon}
  </div>
)
