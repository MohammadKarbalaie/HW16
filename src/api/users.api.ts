import { urls } from "./urls";
import { generateClient } from "./client";
import { IUser } from "../types/users.type";
import { IResDto } from "../types/global.type";
import { IPost } from "../types/posts.type";

interface IFetchUsersResDto extends IResDto {
    users: IUser[];
  }

  interface fetchUsersPostByIdType extends IResDto {
    posts: IPost[];
  }  

  type fetchUsersListType = () => Promise<IFetchUsersResDto>;
export const fetchUsersList : fetchUsersListType = async () => {
    const client = generateClient();
    const response = await client.get<IFetchUsersResDto>(urls.users.list);
    return response.data;
  };


  type fetchUsersPostById = (_: number) => Promise<fetchUsersPostByIdType>;
  export const fetchUsersPost : fetchUsersPostById = async (id: number) => {
      const client = generateClient();
      const response = await client.get<fetchUsersPostByIdType>(urls.users.userpost(id));
      console.log('hi'+response.data)
      return response.data;
    };