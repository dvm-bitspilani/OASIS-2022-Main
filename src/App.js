import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Developers from "./Pages/Developers";
import ReactGA from "react-ga";
import Clouds from "./Components/Clouds";
import Sponsors from "./Pages/Sponsors";
import Eclipse from "./Pages/Eclipse";

const TRACKING_ID = "G-39PJMR8EV2";
ReactGA.initialize(TRACKING_ID);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sponsors/",
    element: <Sponsors />,
  },
  {
    path: '/developers/',
    element: <Developers />
  },
  {
    path:"/eclipse",
    element:<Eclipse/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
