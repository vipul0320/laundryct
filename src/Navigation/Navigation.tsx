
import { createBrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Error from "../pages/Error";
import About from "../pages/About";


export const ROUTES = {
  // LOGIN: "/",
  HOME:"/",
  SERVICES:"/serices",
  CONTACT:'/contact',
  PRICE:'/price'


};

const navigationRouter = createBrowserRouter([
  // {
  //   path: ROUTES.LOGIN,
  //   element: (
  //     <AppRouter>
  //      <Login />
  //   </AppRouter>
  //   ),
  //   errorElement: <Error />,
  // },
  {
    path: ROUTES.HOME,
    element: (
      <AuthRouter  >
      <Home />
    </AuthRouter>
     
    ),
  },
  {
    path: ROUTES.CONTACT,
    element: (
      <AuthRouter  >
        <Contact />
        </AuthRouter>
    ),
  },
  {
    path: ROUTES.SERVICES,
    element: (
      <AuthRouter  >
        <Services />
        </AuthRouter  >
    ),
  },
  {
    path: ROUTES.PRICE,
    element: (
      <AuthRouter  >
        <About />
        </AuthRouter  >
    ),
  },

 
]);

export default navigationRouter;
