import axiosClient from './axiosClient'

const accountApis = {
  login: (payload) => axiosClient.post('/auth/login', payload)
}

export default accountApis