import { configureStore } from '@reduxjs/toolkit'

import { teamSlice } from './teamSlice'
import { invoicesSlice } from './invoicesSlice'

export const store = configureStore({
  reducer: {
    teamSlice: teamSlice.reducer,
    invoicesSlice: invoicesSlice.reducer,
  },
})
