import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";
export const selectAllCampsites = (state) => {
  return CAMPSITES;
};

/*
export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};

*/
const initialState = {
  campsiteArray: CAMPSITES,
};
const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});
export const campsitesReducer = campsitesSlice.reducer;
export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => {
    return campsite.id == id;
  });
};

export const selectFeaturedCampsite = (state) => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
