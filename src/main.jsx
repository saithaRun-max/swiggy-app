import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestarentMenu from "./components/RestarentMenu";
import { Provider} from "react-redux";
import Store from "./components/utils/store";


export const Main = () => {
  return (
    <div>
      <Provider store={Store}>
      <Header />
      <Outlet />
      <Footer />
      </Provider>
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurent/:resId",
        element: <RestarentMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider  router={AppRouter} />
  </React.StrictMode>
);
