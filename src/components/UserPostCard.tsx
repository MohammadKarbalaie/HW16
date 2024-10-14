import Modal from "./Modal";  
import React, { useState } from "react";  
import { IComment } from "../types/comments.type";  
import { AiOutlineComment } from "react-icons/ai";  
import { PostByIdShowName } from "../types/global.type";  
import { fetchPostComments } from "../api/comments.api";  

export const UserPosts: React.FC<PostByIdShowName> = ({  
    id,   
    title,  
    body,  
}) => {  
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [comments, setComments] = useState<IComment[]>([]);  

    const openModal = async () => {  
        try {  
            const response = await fetchPostComments(id); // فرض بر این است که این تابع باز هم نوع مناسب را برمی‌گرداند  
            setComments(response.comments); // مطمئن باشید که response دارای ویژگی comments است  
            setIsModalOpen(true);  
        } catch (error) {  
            console.error("Error fetching comments:", error);  
            // می‌توانید یک پیام خطا به کاربر نشان دهید  
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
            <div className="w-5/12 px-10 py-4 rounded-br-xl rounded-bl-xl rounded-tr-xl bg-gray-300 text-gray-700">  
                <p className="font-thin text-2xl">{body} </p>  
            </div>  
            <div className="flex -mt-8 ml-[550px] text-left">  
                <button onClick={openModal} className="text-2xl text-gray-800 cursor-pointer hover:text-gray-400 delay-100">  
                    <AiOutlineComment />  
                </button>   
                <Modal isOpen={isModalOpen} onClose={closeModal}>  
                    <h2 className="text-lg font-semibold text-left mt-2">Comments :</h2>  
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