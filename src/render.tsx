import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { PostsPage } from "./pages/posts";
import { MainLayout } from "./layouts/main";
import { ErrorBoundary } from "./components/errorBoundary";
import { NotFound } from "./pages/not-found";
import { fetchPostByIdLoader, PostById } from "./pages/post-by-id";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "posts",
        element: <PostsPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "users",
        element: <div>users</div>,
      },
      {
        path: "post-info/:id",
        element: <PostById />,
        loader: fetchPostByIdLoader,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
]);




const queryClient = new QueryClient();
function render() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default render;