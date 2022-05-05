import { Post } from "./post.model";
import { User } from "./user.model";

export type AppState ={
  users: User[];
  posts: Post[];
}