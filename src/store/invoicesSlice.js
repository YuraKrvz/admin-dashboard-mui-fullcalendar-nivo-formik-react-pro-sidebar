import { createSlice, createSelector } from '@reduxjs/toolkit'

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

// memorize createSelector
const items = (state) => state.invoicesSlice

export const totalInvoicesQtySelector = createSelector([items], (items) => {
  // eslint-disable-next-line
  console.log('custom selector totalInvoicesQtySelector runned (^^,)') //test on reuse

  return items.reduce((total, curr) => (total += Number(curr.cost)), 0)
})

export const totalQtyLimitSelector = createSelector(
  [items, (items, limit) => limit],
  (items, limit) => {
    const total = items.reduce((total, curr) => (total += Number(curr.cost)), 0)
    return total > limit
  },
)
