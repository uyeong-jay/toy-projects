const { createSlice } = require("@reduxjs/toolkit");

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

module.exports = coffeeSlice.reducer;
module.exports.coffeeActions = coffeeSlice.actions;
