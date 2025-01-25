import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../config/axios.config'

export const createFetchThunk = (name: string, url: string) => {
  return createAsyncThunk(name, async (id: number) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
  })
}

export const createFetchAllThunk = (name: string, url: string) => {
  return createAsyncThunk(name, async () => {
    const response = await axios.get(url)
    return response.data
  })
}

export const createGenericSlice = (
  name: string,
  fetchThunk: any,
  fetchAllThunk: any,
  initialState: any,
) => {
  return createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchThunk.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchThunk.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false
          state.item = action.payload
        })
        .addCase(fetchThunk.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message || `Error fetching ${name}`
        })
        .addCase(fetchAllThunk.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(
          fetchAllThunk.fulfilled,
          (state, action: PayloadAction<any[]>) => {
            state.loading = false
            state.items = action.payload
          },
        )
        .addCase(fetchAllThunk.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message || `Error fetching ${name}s`
        })
    },
  })
}
