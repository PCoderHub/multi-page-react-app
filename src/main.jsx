import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Users from "./pages/Users.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import "./main.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
