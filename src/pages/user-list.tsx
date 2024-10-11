import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersList } from "../api/users.api";
import { User } from "../components/userlist";

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
        // passing AAA to error boundary
      }, [users.error, users.isError]);
    
      return (
        <div className="grid grid-cols-3 gap-4 py-2 overflow-y-auto px-40">
          {users.data?.users.map((el: { id: React.Key | null | undefined; firstName: string; maidenName: string; lastName: string; image: string; email: string; })=>(
            <User
              key={el.id}
              firstName={el.firstName}
              maidenName={el.maidenName}
              lastName={el.lastName}
              image={el.image}
              email={el.email} id={0}            />
          ))}
        </div>
      );
      
}