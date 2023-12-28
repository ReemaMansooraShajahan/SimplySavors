
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserCircle} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { Link} from "react-router-dom";

export default function Sidebar({ close, links ,location}) {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = (event) => {
        event.preventDefault();
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const closeProfileDropdown = () => {
        setProfileDropdownOpen(false);
    };

    return (
        <div className="sidebar">
            
            <div className="sidebar-links">
                {links.map(link => (
                    <React.Fragment key={link.name}>
                        {link.name === "MyProfile" ? (
                            <div className="sidebar-link">
                                <Link to="#"   onClick={(event) => {
                    toggleProfileDropdown(event);
                  }} className="sidebar-link">
                                <FontAwesomeIcon icon={ faUserCircle}/> My Profile
                                
                                </Link>
                                {profileDropdownOpen && (
                                    <div className="sidebar-link">
                                        {link.items.map(sublink => (
                                       <Link
                                       to={sublink.path}
                                       key={sublink.name}
                                       className={`sidebar-link ${
                                         location.pathname === sublink.path ? "active" : ""
                                       }`}
                                       onClick={() => {
                                         closeProfileDropdown();
                                         close(); // Close the sidebar when a sublink is clicked
                                       }}
                                     >
                                                <FontAwesomeIcon icon={sublink.icon}/>
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                            to={link.path}
                            className="sidebar-link"
                            onClick={() => {
                              closeProfileDropdown(); // Close the profile dropdown when a regular link is clicked
                              close(); // Close the sidebar when a regular link is clicked
                            }}
                          >
                                <FontAwesomeIcon icon={link.icon}/>
                                {link.name}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}