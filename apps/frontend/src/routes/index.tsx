import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";

export const routes: RouteObject[] = [
    {
      path: '/',
      element: <HomePage/>,
    },
    {
      path: '/about',
      element: <AboutPage/>
    },
  ];