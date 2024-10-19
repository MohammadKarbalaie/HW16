import { QueryClient, QueryClientProvider } from "@tanstack/react-query";  
import {  
  RouterProvider,  
  createBrowserRouter,  
} from "react-router-dom";  

import { PostsPage } from "./pages/PostsList";  
import { MainLayout } from "./layouts/main";  
import { NotFound } from "./pages/not-found";  
import { fetchPostByIdLoader, PostById } from "./pages/post-by-id";  
import { UserList } from "./pages/User-List";  
import { UserDetail } from "./pages/UserDetail"; 
import Home from "./components/home"
import { CommentsShow } from "./pages/Comments";
const router = createBrowserRouter([  
  {  
    element: <MainLayout />,  
    children: [  
      {  
        path: "/",  
        element:<Home/>, 
      },  
      {  
        path: "posts",  
        element: <PostsPage />,  
      },  
      {  
        path: "users",  
        element: <UserList />,  
      },  
      {  
        path: "user/:id",     
        element: <UserDetail />,  
      }, 
      {  
        path: "comments",     
        element:<CommentsShow/>,  
      },  
      {  
        path: "/posts/:id/comments",  
        element: <PostById />,  
         loader: fetchPostByIdLoader,  
      },  
      // {  
      //   path: "posts/:id",     
      //   element:<PostDetails />,  
      // },  
      {  
        path: "*",  
        element: <NotFound />,  
      },  
    ],  
  },  
]);  

const queryClient = new QueryClient();  
function App() {  
  return (  
    <QueryClientProvider client={queryClient}>  
      <RouterProvider router={router}>  
      
      </RouterProvider>  
    </QueryClientProvider>  
  );  
}  

export default App;