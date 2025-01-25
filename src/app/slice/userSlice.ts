import { User } from '../../interfaces/users.type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../config/axios.config'
import { RootState } from '../store'
import { handleError, handlePending } from './genericSlice'

interface UserState {
  user: User | null
  users: User[] | null
  address: string | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  user: null,
  users: null,
  address: null,
  loading: false,
  error: null,
}

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (userId: number) => {
    const response = await axios.get(`/user/id/${userId}`)
    return response.data
  },
)

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('/user')
  return response.data
})

export const decodeAddress = createAsyncThunk(
  'address',
  async ({ hex }: { hex: string }) => {
    const response = await axios.post('/telegram/wallet', { hex })
    return response.data
  },
)

export const updateUserWallet = createAsyncThunk(
  'user/updateWallet',
  async ({ telegramId, wallet }: { telegramId: number; wallet: string }) => {
    const response = await axios.post('/user/wallet', {
      telegramId,
      wallet,
    })
    return response.data
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserById.pending, handlePending)
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(fetchUserById.rejected, handleError)
      .addCase(fetchUsers.pending, handlePending)

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload.users
      })
      .addCase(fetchUsers.rejected, handleError)
      .addCase(updateUserWallet.pending, handlePending)
      .addCase(updateUserWallet.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(updateUserWallet.rejected, handleError)
      .addCase(decodeAddress.pending, handlePending)
      .addCase(decodeAddress.fulfilled, (state, action) => {
        state.loading = false
        state.address = action.payload
      })
      .addCase(decodeAddress.rejected, handleError)
  },
})

export const selectUserById = (state: RootState) => state.user.user
export const selectUsers = (state: RootState) => state.user.users
export const selectAddress = (state: RootState) => state.user.address

export default userSlice.reducer
