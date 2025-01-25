import { PayloadAction } from '@reduxjs/toolkit'

interface ErrorAction extends PayloadAction<any> {
  error: {
    message?: string
  }
}

export const handleError = <
  T extends { loading: boolean; error: string | null },
>(
  state: T,
  action: ErrorAction,
) => {
  state.loading = false
  state.error = action.error.message || 'An error occurred'
}

export const handlePending = <
  T extends { loading: boolean; error: string | null },
>(
  state: T,
) => {
  state.loading = true
  state.error = null
}
