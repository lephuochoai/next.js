import { setToken } from '@/store/slices/accountSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function Init({ children }) {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // const getProfile = React.useCallback(() => {
  //   authorityApis.getAdminProfile()
  //     .then((res) => {
  //       if (res.statusCode === 200) {
  //         const payload = res.data
  //         dispatch(setProfile(payload))
  //       } else {
  //         throw res
  //       }
  //       setLoading(false)
  //     }).catch(e => {
  //       errorHelper(e)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(setToken({ token }))
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])
  return loading ? null : children
}

export default Init