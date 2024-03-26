import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
export interface validType {
  isValid: boolean;
}
const initialState: validType = {
  isValid: true,
};

export const validSlice = createSlice({
  name: "isValid",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    validChange: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
  },
});

export const { validChange } = validSlice.actions;

export default validSlice.reducer;
