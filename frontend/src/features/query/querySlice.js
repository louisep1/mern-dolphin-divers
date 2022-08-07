import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import queryService from './queryService'

const initialState = {
  queries: [],
  currentId: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  awaitingGet: false,
}

export const sendQuery = createAsyncThunk(
  '/api/query/send',
  async (queryData, thunkAPI) => {
    try {
      return await queryService.sendQuery(queryData)
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

export const getQueries = createAsyncThunk(
  'api/query/get',
  async (__, thunkAPI) => {
    const token = thunkAPI.getState().admin.admin.token
    try {
      return await queryService.getQueries(token)
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

export const updateResponded = createAsyncThunk(
  'api/query/update',
  async (queryId, thunkAPI) => {
    const token = thunkAPI.getState().admin.admin.token
    try {
      return await queryService.updateResponded(queryId, token)
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

export const deleteQuery = createAsyncThunk(
  'api/query/delete',
  async (queryId, thunkAPI) => {
    const token = thunkAPI.getState().admin.admin.token
    try {
      return await queryService.deleteQuery(queryId, token)
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

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    reset: state => {
      state.queries = []
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.awaitingGet = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendQuery.pending, state => {
        state.isLoading = true
      })
      .addCase(sendQuery.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.currentId = action.payload._id
      })
      .addCase(sendQuery.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getQueries.pending, state => {
        state.isLoading = true
      })
      .addCase(getQueries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.queries = action.payload
        state.awaitingGet = false
      })
      .addCase(getQueries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.awaitingGet = false
      })

      .addCase(updateResponded.pending, state => {
        state.isLoading = true
      })
      .addCase(updateResponded.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.queries = [
          action.payload,
          ...state.queries.filter(query => query._id !== action.payload._id),
        ]
      })
      .addCase(updateResponded.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })

      .addCase(deleteQuery.fulfilled, (state, action) => {
        state.awaitingGet = true
        state.queries = state.queries.filter(
          query => query._id !== action.payload
        )
      })
      .addCase(deleteQuery.rejected, (state, action) => {
        state.message = action.payload
      })
  },
})

export const { reset } = querySlice.actions
export default querySlice.reducer
