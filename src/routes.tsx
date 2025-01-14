import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { NotFound } from "./pages/404";
import { HomeViewModel } from "./pages/app/home/HomeViewModel";
import { PrizesViewModel } from "./pages/app/prizes/registered-prizes/RegisteredPrizesViewModel";

// import { AuthLayout } from "./pages/_layouts/auth";
// import { SignIn } from "./pages/auth/"
// import { SignUp } from "./pages/auth/"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomeViewModel /> },
      {
        path: "/prizes",
        children: [{ path: "registered-prizes", element: <PrizesViewModel /> }],
      },
    ],
  },

  {
    path: "/",
    // element: <AuthLayout/>
    children: [
      // {
      //   path: "sign-in",
      //   element: <SignIn />,
      // },
      // {
      //   path: "sign-up",
      //   element: <SignUp />,
      // },
    ],
  },
]);
