import React from "react";  
import { useQuery } from "@tanstack/react-query";  
import { fetchComments } from "../api/comments.api"; 

export const CommentsShow: React.FC = () => {  
    const comments = useQuery({  
      queryKey: ["comments"],  
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
    <div>
        <p>Comments show</p>
    </div>
  )

}