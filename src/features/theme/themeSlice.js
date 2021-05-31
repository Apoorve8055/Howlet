import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light',
  },
  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentTheme } = themeSlice.actions

export default themeSlice.reducer