import { combineReducers } from "@reduxjs/toolkit";
import { ThemeState } from "./themeSlice";
import themeReducer from "./themeSlice";

export interface RootReducer {
  theme: ThemeState;
}

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
