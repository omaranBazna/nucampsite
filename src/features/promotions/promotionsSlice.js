import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURI";
///import { PROMOTIONS } from "../../app/shared/oldData/PROMOTIONS";
export const fetchPromotions = createAsyncThunk(
  "promotions/fetchPromotions",
  async () => {
    const response = await fetch(baseUrl + "promotions");
    if (!response.ok) {
      return Promise.reject("failed to fetch status" + response.status);
    }
    const data = await response.json();
    return data;
  }
);
const initialState = {
  promotionsArray: [],
  errMsg: "",
  isLoading: true,
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPromotions.pending]: (state, action) => {
      state.isLoading = true;
      state.errMsg = "";
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.promotionsArray = mapImageURL(action.payload);
      state.errMsg = "";
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.promotionsArray = [];
      state.errMsg = action.error ? action.error : "fetch failed";
    },
  },
});
export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
  return state.promotions.promotionsArray.find(
    (promotion) => promotion.featured
  );
};
