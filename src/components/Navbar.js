// Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faHome, faList, faCog, faUser, faSignOut, faFileCirclePlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import Home from "../Pages/Home";
import Sidebar from "./Sidebar";
import ViewRecipes from "../Pages/ViewRecipes";
import MyProfile from "./MyProfile";

export default function Navbar() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/home",
      icon: faHome,
      component: Home
    },
    {
      name: "ViewRecipes",
      path: "/viewrecipes",
      icon: faList,
      component: ViewRecipes
    },
    {
      name: "MyProfile",
      path: "/profile",
      icon: faUser,
      dropdown: true,
      items: [
        { name: "User Profile", path: "/userprofile", icon: faUser },
        { name: "Add Recipes", path: "/addrecipes", icon: faFileCirclePlus },
        { name: "Favorites", path: "/favorites", icon: faHeart },
        { name: "Settings", path: "/settings", icon: faCog },
        { name: "Logout", path: "/logout", icon: faSignOut }
      ],
      component: MyProfile
    }
  ];

  const closeSidebarAndDropdown = () => {
    setShowSideBar(false);
    console.log('clicked');
    setProfileDropdownOpen(false);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownOpen(false);
  };

  return (
    <>
      <div className="Navbar container">
        <Link to="/home" className="logo" onClick={closeSidebarAndDropdown}>
          <span>S</span>imply<span>S</span>avors
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <React.Fragment key={link.name}>
              {link.name === "MyProfile" && link.dropdown ? (
                <div className="my-profile-dropdown">
                  <link.component
                    key={link.name}
                    links={link.items}
                    location={location}
                    closeSidebarAndDropdown={closeSidebarAndDropdown}
                    closeProfileDropdown={closeProfileDropdown}
                  />
                </div>
              ) : (
                <Link
                  className={location.pathname === link.path ? "active" : ""}
                  to={link.path}
                  onClick={closeSidebarAndDropdown}
                >
                  {link.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar close={closeSidebarAndDropdown} links={links} location={location} closeProfileDropdown={closeProfileDropdown} />}
    </>
  );
}
