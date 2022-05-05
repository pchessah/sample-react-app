import http from '../http-common'
import { User } from '../model/user.model'

const getPosts = () => 
{
  return http.get(`/posts`)
}
const getUsers =() =>
{
  return http.get('/users')
}

const updateUser = (userId:number, user: User) =>
{
  return http.put(`/users/${userId}`, user)
}


const UserPostsService = {
  getPosts,
  getUsers,
  updateUser

}


export default  UserPostsService;