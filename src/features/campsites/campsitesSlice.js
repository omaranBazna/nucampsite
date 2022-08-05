import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campsitesArray: CAMPSITES,
};
const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
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
