import { createSlice } from '@reduxjs/toolkit'

import { mockDataInvoices } from '../data/mockData'

const initialState = mockDataInvoices

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload)
    },
    removeInvoice: (state, action) => state.filter((inv) => inv.id !== action.payload),
  },
})

export const { addInvoice, removeInvoice } = invoicesSlice.actions

export const selectAllInvoices = (state) => state
