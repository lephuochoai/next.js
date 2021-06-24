import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const withAuth = (WrappedComponent) => {
  const Wrapper = props => {
    const [loading, setLoading] = useState(true)
    const { token } = useSelector(state => state.account)

    useEffect(() => {
      if (token) {
        Router.replace('/')
      } else {
        setLoading(false)
      }
    }, [token])

    return loading ? null : <WrappedComponent {...props} />
  }

  return Wrapper
}

export {
  withAuth
}
