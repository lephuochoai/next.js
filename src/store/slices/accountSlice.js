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
    setProfile(state, action) {
      const { info } = action.payload
      state.profile = info
    },
    removeAccount(state) {
      state.token = ''
      state.profile = {}
    },
  }
})

const { actions, reducer } = accountSlice

export const {
  setToken, removeAccount, setProfile
} = actions

export default reducer
