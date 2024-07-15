import { configureStore } from '@reduxjs/toolkit';
import arrayReducer from './Features/CreateArray';

export default configureStore({
  reducer: {
    array: arrayReducer,
  },
});
