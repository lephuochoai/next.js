import React from 'react'
import { Button } from 'antd'
import { RiRefreshLine } from 'react-icons/ri'

import styles from './styles.module.less'

// const CATCH_HAS_REFRESH_URL_PARAM = '____ErrorBoundary';

export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorInfo: {},
    }
  }

  componentDidCatch(err) {
    this.setState({ errorInfo: err.message })
  }

  onRefresh = () => {
    window.location.href = '/'
    // window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles['error-boundary-comp-wrapper']}>
          <div className={styles['error-boundary-container']}>
            <div className={styles['title']}>
              <strong>Page Load Error</strong>
            </div>

            <Button
              type="primary"
              icon={<RiRefreshLine />}
              onClick={this.onRefresh}
              className={styles['refresh-button']}
            >
              Reload
            </Button>

            <div className={styles['error-info']}>
              <pre>
                <code>{JSON.stringify(this.state.errorInfo)}</code>
              </pre>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
