import { configureStore } from '@reduxjs/toolkit';
import queryReducer from '../features/query/querySlice';
import adminReducer from '../features/admin/adminSlice'


export const store = configureStore({
  reducer: {
    query: queryReducer,
    admin: adminReducer
  },
});
