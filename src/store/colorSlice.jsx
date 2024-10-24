import { createSlice } from '@reduxjs/toolkit'

const colorSlice = createSlice({
  name: 'txt',
  initialState: {
    color: 'red'
  },
  reducers: {
    changeColor: (state, data) => {
        state.color = data.payload
    }
  }
})

export const { changeColor } = colorSlice.actions;

export default colorSlice;