import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { Navbar, Footer, Loading } from "../components";
import customFetch from "../utils/customFetch";
import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

// export const loader = async () => {
//   try {
//     const { data } = await customFetch.get("/users/currentUser");
//     return data;
//   } catch (error) {
//     return redirect("/");
//   }
// };

const HomeLayoutContext = createContext();

const HomeLayout = () => {
  //const { user } = useLoaderData();
  const [isAuthError, setIsAuthError] = useState(false);

  const navigate = useNavigate();
  const isPageLoading = navigate.state === "loading";

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

  return (
    <HomeLayoutContext.Provider value={{ logoutUser }}>
      <Navbar />

      <Outlet />
      {/* {isPageLoading ? <Loading /> : <Outlet />} */}
      <Footer />
    </HomeLayoutContext.Provider>
  );

  // const { user: initialUser } = useLoaderData();
  // const [user, setUser] = useState(initialUser || null); // Initialize state with the user data or null
  // const [isAuthError, setIsAuthError] = useState(false);

  // const navigate = useNavigate();
  // const isPageLoading = navigate.state === "loading";

  // const logoutUser = async () => {
  //   await customFetch.get("/auth/logout");
  //   setUser(null); // Clear user data after logout
  //   toast.success("Logging out...");
  //   navigate("/"); // Redirect to login page after logout
  // };

  // customFetch.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response.status === 401) {
  //       setIsAuthError(true);
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  // useEffect(() => {
  //   if (!isAuthError) return;
  //   logoutUser();
  // }, [isAuthError]);

  // return (
  //   <HomeLayoutContext.Provider value={{ user, logoutUser }}>
  //     <Navbar />

  //     <Outlet />
  //     {/* {isPageLoading ? <Loading /> : <Outlet />} */}
  //     <Footer />
  //   </HomeLayoutContext.Provider>
  // );
};

export const useHomeLayoutContext = () => useContext(HomeLayoutContext);
export default HomeLayout;
