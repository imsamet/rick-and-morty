import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/appSlice";
import loadingMiddleware from "./middleware/loadingMiddleware";
import { changeStatus } from "./middleware/changeStatus";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(changeStatus.middleware)
      .concat(loadingMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
