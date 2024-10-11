import { urls } from "./urls";
import { generateClient } from "./client";
import { IUser } from "../types/users.type";
import { IResDto } from "../types/global.type";

interface IFetchUsersResDto extends IResDto {
    users: IUser[];
  }

  type fetchUsersListType = () => Promise<IFetchUsersResDto>;
export const fetchUsersList : fetchUsersListType = async () => {
    const client = generateClient();
    const response = await client.get<IFetchUsersResDto>(urls.users.list);
    return response.data;
  };