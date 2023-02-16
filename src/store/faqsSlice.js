import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const postUrl = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=7'

const initialState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  faqs: [],
  error: '',
}

export const fetchFaqs = createAsyncThunk('faqs/fetchFaqs', async () => {
  return axios.get(postUrl).then((res) => res.data)
})

export const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFaqs.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchFaqs.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.faqs = action.payload
      state.error = ''
    })
    builder.addCase(fetchFaqs.rejected, (state, action) => {
      state.status = 'failed'
      state.faqs = []
      state.error = action.error.message
    })
  },
})

export const selectAllFaq = (state) => state.faqsSlice.faqs
export const selectFaqStatus = (state) => state.faqsSlice.status
