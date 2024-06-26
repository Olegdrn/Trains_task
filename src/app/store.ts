import { configureStore } from "@reduxjs/toolkit";
import trainDataReducer from "../features/trainData";
import trainNumberReducer from "../features/trainNumber";
import isValidReducer from "../features/validData";

export const store = configureStore({
  reducer: {
    trainChanger: trainDataReducer,
    trainNumber: trainNumberReducer,
    valid: isValidReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
