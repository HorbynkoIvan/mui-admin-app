import { Action, ThunkAction } from "@reduxjs/toolkit";

export type RootState = {
  test: any;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
