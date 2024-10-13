import React from "react";  
// import { Link } from "react-router-dom";  
import { IPost } from "../types/posts.type";  

export const Post: React.FC<IPost> = ({  
    id,
    title,
    body,
}) => {  
  return (  
    <div className="grid grid-cols-1 rounded-lg px-2 ml-14 bg-white py-2">  
        <div className="flex gap-2">
            <div className="bg-gray-500 w-10 h-10 text-white px-4 py-2 rounded-full -ml-14 flex text-center items-center justify-center">
                <p>{id}</p> 
            </div> 
            <div className="w-96 h-20 bg-white rounded-xl px-2 py-2 font-semibold text-2xl">
                <p>{title}</p>   
            </div> 
        </div>
        <div className="bg-white px-2 py-2 h-72 rounded-xl border pb-4">
            <p>{body}</p>   
        </div> 
    </div>  
  );  
};