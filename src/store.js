import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/user_signup_login/userSlic';
import bookReducer from './pages/book/bookSlice';
// import burrowReducer from './pages/burrow-history/burrowSlice';

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
    // burrowInfo: burrowReducer,
  },
});
export default store;
