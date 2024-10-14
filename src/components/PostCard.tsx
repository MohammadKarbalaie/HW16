import React from "react";  
import { Link } from "react-router-dom";  
import { IPost } from "../types/posts.type";  

export const Post: React.FC<IPost> = ({  
    id,
    title,
    body,
}) => {  
  return (  
    <div className="grid grid-cols-1 rounded-lg px-2 ml-14 py-2">  
        <div className="flex gap-2">
            <div className="bg-gray-500 w-10 h-10 text-white px-4 py-2 rounded-full mt-6 -ml-14 flex text-center items-center justify-center">
                <p>{id}</p> 
            </div> 
            <Link to={`/posts/${id}`}>
            <div className="w-[360px] h-20 text-white rounded-xl px-3 py-2 font-semibold text-2xl">
                <p className="bg-gray-400 rounded-xl h-[70px] px-2 ">{title}</p>   
            </div>
            </Link>  
        </div>
        <div className="bg-white px-2 py-2 h-[350px] rounded-xl pb-4">
            <p className="bg-gray-100 rounded-xl py-3 px-2">{body}</p>   
        </div> 
    </div>  
  );  
};