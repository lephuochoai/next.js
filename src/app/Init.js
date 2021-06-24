import accountApis from '@/apis/account'
import axiosClient from '@/apis/axiosClient'
import { setProfile, setToken } from '@/store/slices/accountSlice'
import errorHelper from '@/utils/errorHelper'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function Init({ children }) {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const getProfile = useCallback(() => {
    accountApis.profile()
      .then((res) => {
        if (res.success) {
          dispatch(setProfile({ info: res.data }))
        } else {
          throw res
        }
        setLoading(false)
      }).catch(e => {
        errorHelper(e)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axiosClient.defaults.headers.common = {
        'Authorization': `Bearer ${token}`,
      }
      dispatch(setToken({ token }))
      getProfile()
    } else {
      setLoading(false)
    }
  }, [])
  return loading ? null : children
}

export default Init