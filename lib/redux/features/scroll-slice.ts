import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ScrollState {
  value: number,
  in_view_id: string,
}

const initialState: ScrollState = {
  value: 0,
  in_view_id: '',
}

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setInViewId: (state, action: PayloadAction<string> )=>{
      state.in_view_id = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setInViewId } = scrollSlice.actions

export default scrollSlice.reducer