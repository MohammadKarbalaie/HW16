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
  },
  };



  