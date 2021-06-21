import cx from 'classnames'
import styles from './styles.module.less'

export const MasterLayout = (props) => (
  <div
    id="g-layout-wrapper--master"
    className={cx(
      styles['layout-wrapper'],
      { [styles['layout-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
      'g-layout-wrapper--master',
    )}
    style={props.style}
  >
    <div
      className={cx(styles['layout-container'], 'g-layout-container--master')}
    >
      {props.children}
    </div>
  </div>
)
