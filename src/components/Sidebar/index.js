import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SideBarItem from "./sidebar-item";

import "./styles.css";
import logo from "../../assets/images/Sell.png";
import LogoutIcon from "../../assets/icons/logout.svg";

function SideBar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  //   function logout() {
  //     localStorage.clear();
  //     window.location.href = '/logout';
  // };

 

  let navigate = useNavigate();
  function greetUser() {
    console.log('Hello we are here');
    localStorage.clear();
    navigate('/logout');
  }

  return (
    <nav className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>

          <div className="sidebar-footer" onClick={greetUser}>
            <span className="sidebar-item-label">Logout</span>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
              onClick={greetUser}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
