import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    up: (state) => {
      state.count += 1;
    },
    down: (state) => {
      state.count -= 1;
    },
    // On your own §4.6.2
    double: (state) => {
      state.count *= 2;
    },
    // With AI §4.6.2
    reset: (state) => {
      state.count = 7;
    },
  },
});

export const { up, down, double, reset } = counterSlice.actions;
export default counterSlice.reducer;
