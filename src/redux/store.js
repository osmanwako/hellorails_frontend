import { configureStore } from '@reduxjs/toolkit';
import Message from './greetingSlice';

const store = configureStore({
  reducer: {
    greeting: Message,
  },
});
export default store;
