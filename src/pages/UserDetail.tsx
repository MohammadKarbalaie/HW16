import { useParams } from 'react-router-dom';  
import { useQuery } from "@tanstack/react-query";  
import { IPost } from '../types/posts.type';  
import { fetchUsersPost } from '../api/users.api';
 

export const UserDetail = () => {  
  const { id } = useParams();   
  const userId = Number(id);  

 
  const userPostsQuery = useQuery({  
    queryKey: ["userposts", userId],  
    queryFn: () => fetchUsersPost(userId),  
    enabled: userId > 0, 
  });  

 
  if (userPostsQuery.isLoading) return <div>Loading...</div>;  
  if (userPostsQuery.isError) return <div>Error fetching posts</div>;  

  return (  
    <div>  
      <h2>Posts by User {userId}</h2>  
      <div>  
        {userPostsQuery.data?.posts.map((post: IPost) => (  
          <div key={post.id}>  
            <h3>{post.title}</h3>  
            <p>{post.body}</p>  
            <button onClick={() => console.log('Show comments for post', post.id)}>  
              Show Comments  
            </button>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};