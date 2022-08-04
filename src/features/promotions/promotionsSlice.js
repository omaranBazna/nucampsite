import { createSlice } from "@reduxjs/toolkit";

import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selectFeuturedPromotion = () => {
  return PROMOTIONS.find((pro) => pro.featured);
};
