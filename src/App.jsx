import "./App.css";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
const Developers = lazy(() => import("./Pages/Developers"));
const Sponsors = lazy(() => import("./Pages/Sponsors"));
const Eclipse = lazy(() => import("./Pages/Eclipse"));
const Media = lazy(() => import("./Pages/Media"));
const Wallmag = lazy(() => import("./Pages/Wallmag"));
const page = (Component) => <Suspense fallback={<p className="portfolio-loading" role="status">Opening archive…</p>}><Component /></Suspense>;
const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/sponsors/", element: page(Sponsors) },
  { path: "/developers/", element: page(Developers) },
  { path: "/mediaPartners/", element: page(Media) },
  { path: "/eclipse", element: page(Eclipse) },
  { path: "/wallmag", element: page(Wallmag) },
]);
export default function App() {
  return <><aside className="portfolio-notice">DVM portfolio archive · Oasis 2022 · Interactive demo</aside><RouterProvider router={router} /></>;
}
