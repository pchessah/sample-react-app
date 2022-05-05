import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../model/post.model'
import { RootState } from '../store/store'

interface AppStatePosts {
  value: Post[]
}

const initialState: AppStatePosts = {
  value: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<Post[]>) => {
      state.value = action.payload
    } 
  }
})

export const { getPosts } = postsSlice.actions
export const postState = (state: RootState) => state.posts;

export default postsSlice.reducer;