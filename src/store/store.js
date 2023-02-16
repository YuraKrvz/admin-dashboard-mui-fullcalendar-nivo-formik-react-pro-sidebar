import { configureStore } from '@reduxjs/toolkit'

import { teamSlice } from './teamSlice'
import { invoicesSlice } from './invoicesSlice'
import { faqsSlice } from './faqsSlice'

export const store = configureStore({
  reducer: {
    teamSlice: teamSlice.reducer,
    invoicesSlice: invoicesSlice.reducer,
    faqsSlice: faqsSlice.reducer,
  },
})
