import { configureStore } from "@reduxjs/toolkit";
import trainDataReducer from "../features/trainData";
import trainNumberReducer from "../features/trainNumber";

export const store = configureStore({
  reducer: {
    trainChanger: trainDataReducer,
    trainNumber: trainNumberReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ["currentDate/dateChanging"],
  //       ignoredPaths: ["dateChanger.currentDate"],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
