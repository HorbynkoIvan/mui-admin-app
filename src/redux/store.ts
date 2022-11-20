import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";

import { testReducer } from "./modules/test";

export const createStore = (preloadedState = {}): any =>
  configureStore({
    reducer: {
      test: testReducer,
    },
    preloadedState,
  });

export function useStore(initialState: any): any {
  const store = useMemo(() => createStore(initialState), [initialState]);
  return store;
}
