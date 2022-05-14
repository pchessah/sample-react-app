import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface AppLightsState {
  on: boolean;
}

const initialState: AppLightsState = {
  on: false,
};

export const LightsReducer = createSlice({
  name: "lights",
  initialState: initialState,
  reducers: {
    toggleLight: (state: AppLightsState, action: PayloadAction<boolean>) => {
      state.on = action.payload;
    },
    getInitialState: (state: AppLightsState) => {
      state.on = initialState.on;
    }
  },
});

export const { toggleLight, getInitialState } = LightsReducer.actions
export const lightsState = (state: RootState) => state.lights;

export default LightsReducer.reducer;
