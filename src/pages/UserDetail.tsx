import { useParams } from 'react-router-dom';  
import { useQuery } from "@tanstack/react-query";  
import { IPost } from '../types/posts.type';  
import { fetchUsersPost } from '../api/users.api';  
import { UserPosts } from '../components/UserPostCard';  

export const UserDetail = () => {  
  const { id } = useParams<{ id: string }>();   
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
          posts={[]} // قرار دادن آرایه‌های خالی در اینجا  
          users={[]} // تغییر به آرایه‌های خالی جهت سازگاری  
          firstName={''}
          lastName={''}
          maidenName={''}
          email={''}
          image={''}
          tags={post.tags || []} // استفاده از تگ‌ها  
          reactions={post.reactions || { likes: 0, dislikes: 0 }} //سمت چپ مقداردهی  
          views={post.views || 0} // مشاهده تعداد  
          userId={post.userId} // استفاده از userId واقعی  
          Comments={[]} // آرایه خالی برای کامنت‌ها یا می‌توانید برخی اطلاعات را به آن اضافه کنید  
          age={0} gender={''} phone={''} username={''} password={''} birthDate={''} bloodGroup={''} height={0} weight={0} eyeColor={''} hair={{
            color: '',
            type: ''
          }} ip={''} address={{
            address: '',
            city: '',
            state: '',
            stateCode: '',
            postalCode: '',
            coordinates: {
              lat: 0,
              lng: 0
            },
            country: ''
          }}        />                 
      ))}  
    </div>   
  );   
};