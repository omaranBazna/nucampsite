import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";
export const selectAllCampsites = () => {
  return CAMPSITES;
};

/*
export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};

*/
export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => {
    return campsite.id == id;
  });
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
