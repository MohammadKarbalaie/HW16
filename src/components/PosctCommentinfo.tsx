import Modal from "./Modal";  
import React, { useState } from "react";  
import { IComment } from "../types/comments.type";  
import { AiFillEye, AiFillLike, AiFillTags, AiOutlineComment, AiOutlineDislike, AiOutlineUser } from "react-icons/ai";  
import { PostByIdShowName } from "../types/global.type";  
import { fetchPostComments } from "../api/comments.api";  

export const Postinfo: React.FC<PostByIdShowName> = ({  
    id,   
    title,  
    body,
    tags,
    reactions: {
      likes,
      dislikes,
    },
    views,
    userId,  
}) => {  
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [comments, setComments] = useState<IComment[]>([]);  

    const openModal = async () => {  
        try {  
            const response = await fetchPostComments(id);  
            setComments(response.comments);  
            setIsModalOpen(true);  
        } catch (error) {  
            console.error("Error fetching comments:", error);   
        }  
    };  

    const closeModal = () => setIsModalOpen(false);  

    return(  
        <div className="flex flex-col items-start mt-6 ml-8">   
            <div className="mt-3 absolute">  
                <p className="-ml-14 mr-10 px-2 rounded-full bg-white py-2 text-black">{id}</p>  
            </div>  
            <div className="flex gap-4 px-10 py-4 border-b rounded-tr-xl rounded-tl-xl bg-gray-500 text-white">  
                <p className="font-semibold text-xl my-1 px-2">{title} </p>  
            </div>  
            <div className="w-5/12 px-10 py-4 rounded-tr-xl bg-gray-300 text-gray-700">  
                <p className="font-thin text-2xl">{body} </p>  
            </div> 
           <div className="flex bg-gray-300 rounded-bl-xl pl-1 w-[400px]">
                <div className="flex flex-col text-orange-600 text-lg uppercase px-2 py-2">
                <AiFillTags /><p>{tags}</p> 
                </div>

                <div className="flex flex-col text-blue-500 text-lg uppercase px-2 py-2">
                    <AiFillLike /><p>{likes}</p> 
                </div>
                
                <div className="flex flex-col text-red-600 text-lg uppercase px-2 py-2">
                    <AiOutlineDislike /><p>{dislikes}</p> 
                </div>

                <div className="flex flex-col text-purple-500 text-lg uppercase px-2 py-2">
                    <AiFillEye /><p>{views}</p>
                </div>
                
                <div className="flex flex-col text-green-500 text-lg uppercase px-2 py-2">
                    <AiOutlineUser /><p>{userId}</p> 
                </div>
           </div>

            <div className="flex -mt-16 ml-[400px] text-left bg-gray-300 ">  
                <button onClick={openModal} className="text-2xl text-gray-800 cursor-pointer hover:text-gray-400 delay-100 bg-gray-300 w-[215px] py-5 ml-6 pl-3 rounded-br-xl ">  
                    <AiOutlineComment />  
                </button>   
                <Modal isOpen={isModalOpen} onClose={closeModal}>  
                    <h2 className="text-lg font-semibold text-left mt-2 border-b">Comments :</h2>  
                    {comments.length > 0 ? (  
                        <div className="mt-2 ml-1 rounded-xl">  
                            {comments.map(comment => (  
                                <div key={comment.id} className="border-b px-2 py-2">  
                                    <strong>{comment.user.fullName}: </strong>  
                                    <p>{comment.body}</p>  
                                </div>  
                            ))}  
                        </div>  
                    ) : (  
                        <p>No Comments</p>  
                    )}  
                </Modal>  
            </div>   
        </div>  
    );  
}