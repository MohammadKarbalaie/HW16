import React from "react";  
import { useQuery } from "@tanstack/react-query";  
import { fetchUsersList } from "../api/users.api";  
import { User } from "../components/UserList";  
import { IUser } from "../types/users.type";  

export const UserList: React.FC = () => {  
  const users = useQuery({  
    queryKey: ["users"],  
    queryFn: fetchUsersList,  
  });  

  React.useEffect(() => {  
    console.log(users.data);  
  }, [users.data]);  

  React.useEffect(() => {  
    if (users.error) {  
      throw new Error("Fetching Data Not Found");  
    }  
  }, [users.error]);  

  return (  
    <div className="grid grid-cols-3 gap-4 py-2 overflow-y-auto px-10"> {/* اصلاح px-40 به px-10 برای کمتر کردن فاصله */}  
      {users.data?.users.map((el: IUser) => (  
        <User  
          key={el.id}  
          id={el.id}  
          firstName={el.firstName}  
          maidenName={el.maidenName}  
          lastName={el.lastName}  
          age={el.age}  
          email={el.email}  
          gender={el.gender}   
          phone={el.phone}  
          username={el.username}  
          password={el.password}  
          birthDate={el.birthDate}  
          bloodGroup={el.bloodGroup}  
          height={el.height}  
          weight={el.weight}  
          eyeColor={el.eyeColor}  
          hair={el.hair}  
          image={el.image}  
          ip={el.ip}  
          address={el.address}  
        />  
      ))}  
    </div>  
  );  
};