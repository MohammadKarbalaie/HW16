import { QueryClient, QueryClientProvider } from "@tanstack/react-query";  
import {  
  RouterProvider,  
  createBrowserRouter,  
} from "react-router-dom";  

import { PostsPage } from "./pages/posts";  
import { MainLayout } from "./layouts/main";  
import { NotFound } from "./pages/not-found";  
import { fetchPostByIdLoader, PostById } from "./pages/post-by-id";  
import { Userlist } from "./pages/user-list";  
import { UserDetail } from "./pages/UserDetail"; 

const router = createBrowserRouter([  
  {  
    element: <MainLayout />,  
    children: [  
      {  
        path: "/",  
        element: (  
          <div>  
            <h1>Hello World</h1>  
          </div>  
        ),  
      },  
      {  
        path: "posts",  
        element: <PostsPage />,  
      },  
      {  
        path: "users",  
        element: <Userlist />,  
      },  
      {  
        path: "user/:id",     
        element: <UserDetail />,  
      },  
      {  
        path: "post-info/:id",  
        element: <PostById />,  
        loader: fetchPostByIdLoader,  
      },  
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