import { createSlice } from "@reduxjs/toolkit";

import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

const initialState = {
  promotionsArray: PROMOTIONS,
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
});
export const selectFeuturedPromotion = () => {
  return PROMOTIONS.find((pro) => pro.featured);
};
