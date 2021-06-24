import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: '',
    profile: {},
  },
  reducers: {
    setToken(state, action) {
      const { token } = action.payload
      state.token = token
    },
    removeAccount(state) {
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
  setToken, removeAccount, setProfile
} = actions

export default reducer
