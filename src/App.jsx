import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import { routeLoader } from "./routeModules";

const router = createBrowserRouter([{ path: "/", errorElement: <ErrorPage />, children: [
  { index: true, Component: Home },
  ...["sponsors", "developers", "mediaPartners", "eclipse", "wallmag"].map(path => ({ path, lazy: routeLoader(`/${path}`) })),
] }]);
export default function App() { return <RouterProvider router={router} />; }
