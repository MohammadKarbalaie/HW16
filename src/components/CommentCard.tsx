import React from "react";  
// import { Link } from "react-router-dom";  
import { IComment } from "../types/comments.type";  

export const Comment: React.FC<IComment> = ({  
  id,  
  body,  
}) => {  
  return (  
        <div className="flex justify-center relative mt-8">
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                    <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy" />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{id}</p>
                            <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                        </div>
                        <p className="text-gray-400 text-sm"><Date/></p>
                    </div>
                </div>
                <p className="-mt-4 text-gray-500">{body}</p>
            </div>
        </div>

  );  
};