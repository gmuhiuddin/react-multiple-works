import { createSlice } from '@reduxjs/toolkit'

const txtSlice = createSlice({
  name: 'txt',
  initialState: {
    txt: 'Initial txt'
  },
  reducers: {
    updataTxt: (state, data) => {
        state.txt = data.payload
    }
  }
})

export const { updataTxt } = txtSlice.actions;

export default txtSlice;