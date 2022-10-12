import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./components/Root";
import Statics from "./components/Statics";

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/topic',
            element: <Home></Home>
        },
        {
            path: '/stat',
            element:<Statics></Statics>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]
  }])


  export default router;