 import React from "react";  
import { useQuery } from "@tanstack/react-query";  
import { fetchUsersList } from "../api/users.api";  
import { User } from "../components/UserList";  

export const Userlist: React.FC = () => {  
  const users = useQuery({  
    queryKey: ["users"],  
    queryFn: fetchUsersList,  
  });  

  React.useEffect(() => {  
    console.log(users.data);  
  }, [users]);  

  React.useEffect(() => {  
    if (!users.error || !users.isError) return;  
    throw new Error("Fetching Data Not Found");  
  }, [users.error, users.isError]);  
  
  return (  
    <div className="grid grid-cols-3 gap-4 py-2 overflow-y-auto px-40">  
      {users.data?.users.map((el) => (  
        <User  
          key={el.id}  
          id={el.id}  
          firstName={el.firstName}  
          maidenName={el.maidenName}  
          lastName={el.lastName}  
          image={el.image}  
          email={el.email}  
        />  
      ))}  
    </div>  
  );  
}