import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCoffee: 5,
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCoffee--;
    },
    restocked: (state, action) => {
      state.numOfCoffee += action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { ordered, restocked } = coffeeSlice.actions;
