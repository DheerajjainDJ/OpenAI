import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Loader from "./comps/Loader";
const Header = lazy(() => import("./comps/Header"));
const Community = lazy(() => import("./pages/Community"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const Home = lazy(() => import("./pages/Home"));
const NoMatchRoute = lazy(() => import("./pages/NoMatchRoute"));

const AppLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "*",
        element: <NoMatchRoute />,
      },
    ],
  },
]);

export default AppLayout;
