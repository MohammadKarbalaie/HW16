import { AxiosError } from "axios";  
import { useQuery } from "@tanstack/react-query";  
import { Navigate, useParams, useLoaderData, LoaderFunctionArgs } from "react-router-dom";  

import { IPost } from "../types/posts.type";  
import { fetchPostById } from "../api/posts.api";  
import { Postinfo } from "../components/PosctCommentinfo";  

export const PostById: React.FC = () => {  
  const { id } = useParams();  
  const loaderData = useLoaderData();  
  const validId = !isNaN(Number(id));  

  console.log(loaderData);  

  const posts = useQuery({  
    queryKey: ["fetching-posts", id],  
    queryFn: () => fetchPostById(Number(id)),  
    enabled: validId,  
  });  

  if (!validId || (posts.error as AxiosError)?.status === 404) {  
    return <Navigate to="/404" />;  
  }  

  return (  
    <div className="grid grid-cols-1 py-2 overflow-y-auto px-8">  
    {posts.data && (  
      <Postinfo  
          key={posts.data.id || 0}
          id={posts.data.id || 0}
          title={posts.data.title || ""}
          body={posts.data.body || ""}
          tags={'#' + (posts.data.tags).join(' #') || []}
          reactions={{
            likes: posts.data.reactions.likes || 0,
            dislikes: posts.data.reactions.dislikes || 0
          }}
          views={posts.data.views || 0}
          userId={posts.data.userId || 0} posts={[]} users={[]} Comments={[]} firstName={""} lastName={""} maidenName={""} email={""} image={""} age={0} gender={""} phone={""} username={""} password={""} birthDate={""} bloodGroup={""} height={0} weight={0} eyeColor={""} hair={{
            color: "",
            type: ""
          }} ip={""} address={{
            address: "",
            city: "",
            state: "",
            stateCode: "",
            postalCode: "",
            coordinates: {
              lat: 0,
              lng: 0
            },
            country: ""
          }}      />  
    )}  
  </div>   
  );  
};  

// eslint-disable-next-line react-refresh/only-export-components  
export const fetchPostByIdLoader = async (data: LoaderFunctionArgs) => {  
  let post: IPost | undefined = undefined;  
  try {  
    post = await fetchPostById(Number(data.params.id));  
  } catch (error) {  
    console.log("error", error);  
  }  
  return { post };  
};
