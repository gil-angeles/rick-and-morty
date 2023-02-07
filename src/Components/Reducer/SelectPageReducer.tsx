import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store/store'

interface PaginationState {
  page: number,
  count: number,
}

const initialState = {
  page: 1,
  count: 0,
} as PaginationState

export const selectPageSlice = createSlice({
  name: 'pagination',  
  initialState,
  reducers: {
    increment: state => {
      state.page += 1
    },
    decrement: state => {
      state.page -= 1
    },    
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})

export const { increment, decrement, setCurrentPage, setCount } = selectPageSlice.actions

export const selectPage = (state: RootState) => state.pagination.page

export default selectPageSlice.reducer