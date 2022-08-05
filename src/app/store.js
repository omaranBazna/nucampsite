import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { commentsReducer } from "../features/Comments/commentsSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefault) => {
    getDefault.concat([]);
  },
});
