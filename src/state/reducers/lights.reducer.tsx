import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAllLights } from "../../model/all-lights.model";
import { ILight, ILightPattern, IToggleAction } from "../../model/light.model";
import { LightsService } from "../../services/lights.service";
import { RootState } from "../store/store";

interface AppLightsState {
  lights: ILight[];
  allLights: IAllLights;
}

const initialState: AppLightsState = {
  lights: [],
  allLights: {on: false, pattern: 1},
};


export const LightsReducer = createSlice({
  name: "lights",
  initialState: initialState,
  reducers: {

    toggleSingleLight: (state: AppLightsState, action: PayloadAction<{light:ILight, toggleAction:IToggleAction}>) => {
      const lightToChange = state.lights.find(light => light.id === action.payload.light.id)
      if (lightToChange) {
        lightToChange.on = action.payload.toggleAction === IToggleAction.on ? true : false;
    
        LightsService.toggleLight(action.payload.light, action.payload.toggleAction)
      } else {
        throw new Error(`Light with id ${action.payload.light.id} not found`);
      }     
    },

    getInitialState: (state: AppLightsState, action: PayloadAction<ILight[]>) => {
      state.lights = action.payload;
    },

    addLight: (state: AppLightsState, action: PayloadAction<ILight>) => {
      LightsService.addLight(action.payload).then((val)=>{ });
    },

    addLightToState(state: AppLightsState, action: PayloadAction<ILight>) {
      state.lights.push(action.payload);
    },

    getInitialAllLightState(state: AppLightsState, action: PayloadAction<IAllLights>) {
      state.allLights = action.payload;
    },

    toggleAllLights(state: AppLightsState, action: PayloadAction<{toggleAction:IToggleAction}>) {
      state.allLights.on = action.payload.toggleAction === IToggleAction.on ? true : false;
      LightsService.toggleAllLights(state.allLights, action.payload.toggleAction);
    },

    togglePattern(state: AppLightsState, action: PayloadAction<ILightPattern>){
      state.allLights.pattern = action.payload;
      LightsService.togglePattern(state.allLights, action.payload);
    },

    togglePatternInState(state: AppLightsState, action: PayloadAction<ILightPattern>){
      state.allLights.pattern = action.payload;
    }

  },
});

export const {togglePatternInState, togglePattern, toggleSingleLight, getInitialState , addLight, addLightToState, getInitialAllLightState, toggleAllLights} = LightsReducer.actions;

export const lightsState = (state: RootState) => state.lights;

export default LightsReducer.reducer;
