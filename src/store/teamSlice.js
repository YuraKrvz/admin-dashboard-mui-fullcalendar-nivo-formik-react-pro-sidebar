import { createSlice } from '@reduxjs/toolkit'

import { mockDataTeam } from '../data/mockData'

const initialState = mockDataTeam

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload)
    },
    removeMember: (state, action) => state.filter((member) => member.id !== action.payload),
  },
})

export const { addMember, removeMember } = teamSlice.actions

export const selectAllTeam = (state) => state
