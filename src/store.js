import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeReducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
