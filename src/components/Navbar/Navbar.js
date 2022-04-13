import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";

const Navbar = () => {
  const { pathname } = useLocation();

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // User is signed in,
        // const uid = user.uid;
      } else {
        setUser({});
        // User is signed out
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully Sign Out !!!");
        // Sign-out successful.
      })
      .catch((error) => {
        toast.error("Opps! An error happend.");
        // An error happened.
      });
  };

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="videos"
        >
          Videos
        </NavLink>
        {user?.uid ? (
          <>
          <img className="login-img" src=
          { 
            user?.photoURL ? user?.photoURL : "" 
          } 
          alt="" />
          
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to=""
          >
            {user?.displayName ? user?.displayName : ""}
          </NavLink>
          <NavLink onClick={handleSignOut}
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="login"
          >
            Sign Out
          </NavLink>
          </>  
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="login"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
