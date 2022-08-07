import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminService'

const initialState = {
  admin: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

export const loginAdmin = createAsyncThunk(
  '/api/admin/login',
  async (adminData, thunkAPI) => {
    try {
      return await adminService.loginAdmin(adminData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.query ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(loginAdmin.pending, state => {
        state.isLoading = true
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.admin = action.payload
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = adminSlice.actions
export default adminSlice.reducer
