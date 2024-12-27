import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { NotFound } from "./pages/404";
import { HomeViewModel } from "./pages/app/home/HomeViewModel";
import { PrizesViewModel } from "./pages/app/prizes/PrizesViewModel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomeViewModel /> },
      { path: "/prizes", element: <PrizesViewModel /> },
    ],
  },
]);
