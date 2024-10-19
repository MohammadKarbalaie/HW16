import React from "react";  
import { useQuery } from "@tanstack/react-query";  
import { fetchComments } from "../api/comments.api"; 
import { Comment } from "../components/CommentCard";
import { IComments } from "../types/comments.type";

export const CommentsShow: React.FC = () => {  
    const comments = useQuery({  
      queryKey: ["comment"],  
      queryFn: fetchComments,  
});  

React.useEffect(() => {  
    console.log(comments.data);  
  }, [comments]); 

  React.useEffect(() => {  
    if (!comments.error || !comments.isError) return;  
    throw new Error("Fetching Data Not Found");  
  }, [comments.error, comments.isError]);  

  return (
    <div className="grid grid-cols-3 gap-4 py-2 overflow-y-auto px-40">  
    {comments.data?.comments.map((comment: IComments) => (  
      <Comment  
            key={comment.id}
            id={comment.id}
            body={comment.body}
            postId={0}
            likes={0}
            user={{
                id: 0,
                username: "",
                fullName: ""
            }}   
        />  
    ))}  
  </div> 
  )

}