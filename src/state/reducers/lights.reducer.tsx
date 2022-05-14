import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILight } from "../../model/light.model";
import { RootState } from "../store/store";

interface AppLightsState {
  lights: ILight[];
}

const initialState: AppLightsState = {
  lights: [],
};

export const LightsReducer = createSlice({
  name: "lights",
  initialState: initialState,
  reducers: {
    toggleLight: (state: AppLightsState, action: PayloadAction<ILight>) => {
      let lightToChange = state.lights.find((light) => light.id === action.payload.id);
      lightToChange = action.payload;
    },
    getInitialState: (state: AppLightsState, action: PayloadAction<ILight[]>) => {
      state.lights = action.payload;
    }
  },
});

export const { toggleLight, getInitialState } = LightsReducer.actions
export const lightsState = (state: RootState) => state.lights;

export default LightsReducer.reducer;
