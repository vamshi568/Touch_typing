import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/Universal'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})