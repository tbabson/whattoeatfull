import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Blog,
  Profile,
  Cart,
  Error,
  Foods,
  SingleFood,
  Checkout,
  Orders,
  Admin,
  ChangePassword,
  Login,
  Register,
  AddFood,
  UpdateFood,
  DeleteFood,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { store } from "./store";
//import { loader as homeLoader } from "./pages/HomeLayout";
import { loader as foodLoader } from "./pages/Foods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    //loader: homeLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Foods />,
        loader: foodLoader,
        errorElement: <Error />,
      },
      {
        path: "foods/:id",
        element: <SingleFood />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
  {
    path: "changePassword",
    element: <ChangePassword />,
    errorElement: <Error />,
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: "addFood",
        element: <AddFood />,
      },
      {
        path: "updateFood",
        element: <UpdateFood />,
      },
      {
        path: "deleteFood",
        element: <DeleteFood />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
