import React from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchPostsList } from "../api/posts.api";
import { Post } from "../components/PostCard";

export const PostsPage: React.FC = () => {
  const posts = useQuery({
    queryKey: ["post"],
    queryFn: fetchPostsList,
  });

  React.useEffect(() => {
    console.log(posts.data);
  }, [posts]);

  React.useEffect(() => {
    if (!posts.error || !posts.isError) return;
    throw new Error("AAA");
    // passing AAA to error boundary
  }, [posts.error, posts.isError]);

  return (
    <div className="grid grid-cols-3 gap-4 py-2 overflow-y-auto px-40">  
      {posts.data?.posts.map((el) => (  
        <Post  
          key={el.id}
          id={el.id}
          title={el.title}
          body={el.body} 
          tags={[]} 
          reactions={{
            likes: 0,
            dislikes: 0
          }} 
          views={0} 
          userId={0}        />  
      ))}  
    </div>  
  );
};