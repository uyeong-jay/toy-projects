import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  numOfCoffee: number;
}

const initialState: initialState = {
  numOfCoffee: 5,
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCoffee--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCoffee += action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { ordered, restocked } = coffeeSlice.actions;
