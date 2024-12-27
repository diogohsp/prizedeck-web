import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/prizes", element: <Prizes /> },
    ],
  },
]);
