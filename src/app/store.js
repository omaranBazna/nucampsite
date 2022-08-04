import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { commentsReducer } from "../features/Comments/commentsSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
export const store = configureStore({
  reducer: {
    campsite: campsitesReducer,
  },
});
