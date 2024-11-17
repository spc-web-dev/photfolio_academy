import { configureStore } from '@reduxjs/toolkit'
import scrollReducer from '@/lib/redux/features/scroll-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        scroll: scrollReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']