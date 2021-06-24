import axiosClient from './axiosClient'

const accountApis = {
  login: (payload) => axiosClient.post('/auth/login', payload),
  logout: () => axiosClient.post('/auth/logout'),
  profile: () => axiosClient.get('/users/profile')
}

export default accountApis