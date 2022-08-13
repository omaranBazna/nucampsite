import { createSlice } from "@reduxjs/toolkit";
///import { COMMENTS } from "../../app/shared/COMMENTS";

import { isCompositeComponent } from "react-dom/test-utils";
///import { createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { AccordionItem } from "reactstrap";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(baseUrl + "comments");
    if (!response.ok) {
      return Promise.reject("promise rejected with status" + response.status);
    }
    const data = await response.json();
    return data;
  }
);
export const postComment = createAsyncThunk(
  "comments/postComment",
  async (comment, { dispatch }) => {
    const response = await fetch(baseUrl + "comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return Promise.reject("promise rejected with status" + response.status);
    }
    const data = await response.json();
    dispatch(addComment(data));
  }
);
const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: "",
  isUpLoadingStart: false,
  isUploading: true,
  UploadingMsg: "",
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
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.isLoading = true;
      state.errMsg = "";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.commentsArray = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "failed to fetch";
    },
    [postComment.rejected]: (state, action) => {
      state.isUpLoadingStart = false;
      state.isLoading = false;
      state.UploadingMsg = action.error
        ? action.error.message
        : "failed to Upload";
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
