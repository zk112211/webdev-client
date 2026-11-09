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
    // TODO (On your own §4.6.2): a reducer of your own (e.g. a reset), exported
    // and dispatched from a button in CounterRedux
    // With AI §4.6.2
    reset: (state) => {
      state.count = 7;
    },
  },
});

export const { up, down, reset } = counterSlice.actions;
export default counterSlice.reducer;
