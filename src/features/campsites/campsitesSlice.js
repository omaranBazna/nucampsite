//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURI";

export const fetchCampsites = createAsyncThunk(
  "campsite/fetchCampsites",
  async () => {
    const response = await fetch(baseUrl + "campsites");
    if (!response.ok) {
      return Promise.reject("unable to fetch ,status" + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: "",
};
const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.campsitesArray = mapImageURL(action.payload);
    },
    [fetchCampsites.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "fetch failed";
    },
  },
});
export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};
export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find((campsite) => {
    return campsite.id == id;
  });
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
export const ErrorMsg = (state) => state.campsites.errMsg;
export const isLoading = (state) => state.campsites.isLoading;
