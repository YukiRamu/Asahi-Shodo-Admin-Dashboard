import { configureStore } from '@reduxjs/toolkit';

//import reducer here
import rootReducer from "../reduer";

const store = configureStore({
  reducer: { rootReducer }
});

export default store;
