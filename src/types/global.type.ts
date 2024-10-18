import { IUser } from "./users.type";
import { IPost } from "./posts.type";
import { IComments } from "./comments.type";

export interface IResDto {
  skip: number;
  limit: number;
  total: number;
}

export interface IPagination {
  skip?: number;
  limit?: number;
}


  export interface PostByIdShowName extends IUser,IPost {
    posts: IPost[];
    users: IUser[];
    Comments :IComments[];
  }