import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: '',
    profile: {},
  },
  reducers: {
    login(state, action) {
      const { token } = action.payload
      state.token = token
    },
    logout(state) {
      state.token = ''
      state.profile = {}
    },
    setProfile(state, action) {
      state.profile = action.payload || {}
    }
  }
})

const { actions, reducer } = accountSlice

export const {
  login, logout, setProfile
} = actions

export default reducer