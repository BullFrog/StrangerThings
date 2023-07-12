import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
import "./index.css";
import Logout from "./components/Logout";
import Root from "./routes/root";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/HomePage",
        element: <HomePage/>,
      },
      {
        path: "/Posts",
        element: <Posts/>,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);