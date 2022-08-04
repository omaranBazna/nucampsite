import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { PARTNERS } from "../../app/shared/PARTNERS";
const initialState = {
  partnersArray: PARTNERS,
};
const partnersSlice = createSlice({
  name: "partner",
  initialState,
});
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = () => {
  return PARTNERS;
};

export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};
