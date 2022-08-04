import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { COMMENTS } from "../../app/shared/COMMENTS";

import { isCompositeComponent } from "react-dom/test-utils";

const initialState = {
  commentsArray: COMMENTS,
};
export const selectCommentByCampsiteId = (campsiteid) => {
  return COMMENTS.filter((comment) => {
    return comment.campsiteId == campsiteid;
  });
};
