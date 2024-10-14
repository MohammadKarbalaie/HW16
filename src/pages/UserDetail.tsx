import { useParams } from 'react-router-dom';  
import { useQuery } from "@tanstack/react-query";  
import { IPost } from '../types/posts.type';   
import { fetchUsersPost } from '../api/users.api';
import { UserPosts } from '../components/UserPostCard';
 

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
        <div className="flex flex-col gap-4 py-2 overflow-y-auto px-10">    
            {userPostsQuery.data?.posts.map((post: IPost) => (   
                <UserPosts  
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                posts={[]}
                users={[]}
                firstName={''}
                lastName={''}
                maidenName={''}
                email={''}
                image={''}
                tags={[]}
                reactions={{
                  likes: 0,
                  dislikes: 0
                }}
                views={0}
                userId={0}
                Comments={[]}  
                />                 
            ))}  
        </div>   
    );   
};