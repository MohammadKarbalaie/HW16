import React from "react";  
import { Link } from "react-router-dom";  
import { IUser } from "../types/users.type";  

export const User: React.FC<IUser> = ({  
  id,  
  firstName,  
  lastName,  
  maidenName,  
  email,  
  image,  
}) => {  
  return (  
    <div className="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm">  
      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">  
        <div  
          role="button"  
          className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"  
        >  
          <div className="mr-4 grid place-items-center">  
            <img  
              alt="user"  
              src={image}  
              className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"  
            />  
          </div>  
          <div>  
            <h6 className="text-slate-800 font-medium">  
              <Link to={`/user/${id}`}>{firstName} {maidenName} {lastName}</Link>  
            </h6>  
            <p className="text-slate-500 text-sm">{email}</p>  
          </div>  
        </div>  
      </nav>  
    </div>  
  );  
};