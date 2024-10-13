import React from "react";  
// import { Link } from "react-router-dom";  
import { PostByIdShowName } from "../types/global.type"; 

export const UserPosts: React.FC<PostByIdShowName> = ({  
    id, 
    title,
    body,
})=>{
    return(
        <div className="flex flex-col items-start mt-6 ml-8">   
            <div className="mt-3 absolute">
                <p className="-ml-14 mr-10 px-2 rounded-full bg-white py-2 text-black">{id}</p>  
            </div>
            <div className=" flex gap-4 px-10 py-4 border-b rounded-tr-xl rounded-tl-xl bg-gray-500 text-white ">
                    <p className="font-semibold text-xl my-1 px-2">{title} </p>
            </div>
            <div className="w-5/12 px-10 py-4 rounded-br-xl rounded-bl-xl rounded-tr-xl bg-gray-300 text-gray-700 ">
                <p className="font-thin text-2xl">{body} </p>
            </div>
        </div>
    )
}