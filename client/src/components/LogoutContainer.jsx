import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/StyledPages/LogoutContainer";
import { useEffect, useState } from "react";
//import { useHomeLayoutContext } from "../pages/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { useNavigate, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";

const LogoutContainer = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // API call to log the user out from the backend
  const logoutUserApi = async () => {
    try {
      await customFetch.get("/auth/logout");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Handle front-end logout
  const handleLogout = async () => {
    await logoutUserApi(); // Log the user out from the backend first
    dispatch(logoutUser()); // Then clear the user from the Redux store
    navigate("/"); // Finally, navigate to the homepage
  };

  return (
    <Wrapper>
      {user ? (
        <div>
          <FaUserCircle />
          {user?.fullName}
          <button
            type="button"
            className="btn logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button type="button" className="btn logout-btn">
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </Wrapper>
  );
};
export default LogoutContainer;
