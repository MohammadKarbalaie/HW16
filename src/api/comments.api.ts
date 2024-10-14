import { urls } from "./urls";
import { generateClient } from "./client";
import { IComment} from "../types/comments.type";
import { IResDto } from "../types/global.type";

interface IFetchCommentsResDto extends IResDto {
    comments: IComment[];
  }

  export interface IFetchPostCommentsType extends IResDto {
    comments :IComment[]
}



  type fetchCommentsListType = () => Promise<IFetchCommentsResDto>;  
  export const fetchComments: fetchCommentsListType = async () => {
    const client = generateClient();
    const response = await client.get<IFetchCommentsResDto>(urls.comments.list);
    return response.data;
  };

  type fetchCommentsByIdType = (_: number) => Promise<IFetchCommentsResDto>;  
  export const fetchById: fetchCommentsByIdType = async (id: number) => {
    const client = generateClient();
    const response = await client.get<IFetchCommentsResDto>(urls.comments.commentbyID(id));
    return response.data;
  };

  type fetchPostCommentType =(_: number)=>Promise<IFetchPostCommentsType>;
export const fetchPostComments: fetchPostCommentType = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IFetchPostCommentsType>(urls.comments.commentpost(id));
  return response.data;
};

type fetchCommentByPostIdType =(_: number)=>Promise<IFetchPostCommentsType>;
export const fetchCommentByPostId: fetchCommentByPostIdType = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IFetchPostCommentsType>(urls.comments.commentpost(id));
  return response.data;
};