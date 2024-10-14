export const urls = {
    posts: {
      list: "/posts",
      byId: (id: number) => `/posts/${id}`,
   
    },
    users:{
        list:"/users",
        userpost :(userid:number) => `/users/${userid}/posts`
    },
    comments:{
      list:"/comments",
      commentbyID :(id: number) =>`comment/${id}`,
      commentpost:(id: number) =>`/posts/${id}/comments`,
      commentbypostid:(id:number)=>`/comments/post/${id}`,
  },
  };



  