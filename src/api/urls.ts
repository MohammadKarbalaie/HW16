export const urls = {
    posts: {
      list: "/posts",
      byId: (id: number) => `/posts/${id}`,
      byTag: (tag: string) => `/posts/tag/${tag}`
    },
    users:{
        list:"/users",
        byId: (id: number) => `/users/${id}`,
        userpost :(userid:number) => `/users/${userid}/posts`
    },
    comments:{
      list:"/comments",
      commentbyID :(id: number) =>`comment/${id}`,
      commentpost:(id: number) =>`/posts/${id}/comments`,
      commentbypostid:(id:number)=>`/comments/post/${id}`,
  },
  };



  