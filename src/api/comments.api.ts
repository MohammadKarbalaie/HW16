import { urls } from "./urls";
import { generateClient } from "./client";
import { IComment } from "../types/comments.type";
import { IResDto } from "../types/global.type";

interface IFetchCommentsResDto extends IResDto {
    comments: IComment[];
  }

  type fetchCommentsListType = () => Promise<IFetchCommentsResDto>;  
  export const fetchComments: fetchCommentsListType = async () => {
    const client = generateClient();
    const response = await client.get<IFetchCommentsResDto>(urls.comments.list);
    return response.data;
  };