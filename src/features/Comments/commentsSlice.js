import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";

import { isCompositeComponent } from "react-dom/test-utils";

const initialState = {
  commentsArray: COMMENTS,
};
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload,
      };
      state.commentsArray.push(newComment);
    },
  },
});
export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
export const selectCommentByCampsiteId = (campsiteid) => (state) => {
  return state.comments.commentsArray.filter((comment) => {
    return comment.campsiteId == campsiteid;
  });
};
