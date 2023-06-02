import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/reducers";
import { logger } from "../middlewares/logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger as Middleware),
});
