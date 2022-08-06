import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { commentsReducer } from "../features/Comments/commentsSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { userReducer } from "../features/user/userSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    comments: commentsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
