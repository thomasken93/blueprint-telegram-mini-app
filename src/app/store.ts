import { configureStore } from '@reduxjs/toolkit'
import rankingReducer from './slice/rankingSlice'
import userReducer from './slice/userSlice'
import friendReducer from './slice/friendSlice'

const store = configureStore({
  reducer: {
    ranking: rankingReducer,
    user: userReducer,
    friend: friendReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
