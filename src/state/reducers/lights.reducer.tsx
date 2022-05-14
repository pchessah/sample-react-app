import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model/user.model'
import { RootState } from '../store/store'

interface AppLightsState {
  value: {}
}

const initialState: AppLightsState = {
  value: []
}

export const LightsReducer = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    // getUsers: (state, action: PayloadAction<User[]>) => {
    //   state.value = action.payload
    // },

    // updateUser:(state, action: PayloadAction<User>) => {
    //   debugger
    //   const userToUpdate = state.value.find(user => user.id === action.payload.id);
    //   if (userToUpdate) {
    //     userToUpdate.name = action.payload.name;
    //     debugger
    //   }
  }
  }
)

// export const { getUsers, updateUser } = LightsReducer.actions
// export const usersState = (state: RootState) => state.users;

export default LightsReducer.reducer;