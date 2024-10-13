import { IUser } from "./users.type";
import { IPost } from "./posts.type";

export interface IResDto {
    skip: number;
    limit: number;
    total: number;
  }


  export interface PostByIdShowName extends IUser,IPost {
    posts: IPost[];
    users: IUser[];
  }