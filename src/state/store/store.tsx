import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../reducers/posts.reducer'
import usersReducer from '../reducers/users.reducer'


 export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch