import { createSlice } from "@reduxjs/toolkit";
import { PARTNERS } from "../../app/shared/PARTNERS";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURI";

createAsyncThunk("campsites/fetchPartners", async () => {
  const response = await fetch(baseUrl + "partners");
  if (!response.ok) {
    return Promise.reject("failed to fetch status") + response.status;
  }
  const data = await response.json();
  return data;
});

const initialState = {
  partnersArray: [],
  errMsg: "",
  isLoading: true,
};
const [pending, fulfilled, rejected] = fetchPartners;
const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: {
    pending: (state, action) => {
      state.isLoading = true;
    },
    fulfilled: (state, action) => {
      state.partnersArray = action.payload;
      state.isLoading = false;
    },
    rejected: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error : "Error";
    },
  },
});
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};
