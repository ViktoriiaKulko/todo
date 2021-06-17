import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ThemeState {
  currentTheme: 'light' | 'dark'
}

const initialState: ThemeState = {
  currentTheme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    change: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'
    }
  }
})

export const { change } = themeSlice.actions

export const selectCurrentTheme = (state: RootState) => state.theme.currentTheme

export default themeSlice.reducer
