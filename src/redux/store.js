import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import themeSlice from "./theme/themeSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
