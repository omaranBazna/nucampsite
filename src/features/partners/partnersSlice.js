import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { PARTNERS } from "../../app/shared/PARTNERS";
const initialState = {
  partnersArray: PARTNERS,
};

export const selectAllPartners = () => {
  return PARTNERS;
};

export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};
