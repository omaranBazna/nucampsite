import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { COMMENTS } from "../../app/shared/COMMENTS";

import { isCompositeComponent } from "react-dom/test-utils";

const initialState = {
  commentsArray: COMMENTS,
};
const commentsSlice = createSlice({
  name: "comments",
  initialState,
});

export const commentsReducer = commentsSlice.reducer;
export const selectCommentByCampsiteId = (campsiteid) => (state) => {
  return state.comments.commentsArray.filter((comment) => {
    return comment.campsiteId == campsiteid;
  });
};
