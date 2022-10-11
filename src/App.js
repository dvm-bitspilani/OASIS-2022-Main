import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Developers from "./Pages/Developers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/developers",
    element: <Developers />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
