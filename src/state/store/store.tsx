import { configureStore } from '@reduxjs/toolkit';
import lightsReducer from '../reducers/lights.reducer';


 export const store = configureStore({
  reducer: {
    lights: lightsReducer
   
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch