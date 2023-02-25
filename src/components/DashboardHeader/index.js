import React from "react";

import "./styles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import { useNavigate } from "react-router-dom";

function DashboardHeader({ btnText, onClick }) {
  let navigate = useNavigate();
  const editProductRouteChange = () => {
    let path = `add-product`;
    navigate(path);
  };

  function handleClick(event) {
    navigate("/add-product");
  }

 
  function getSellerProfile() {
    navigate('/profile');
  }

  return (
    <div className="dashbord-header-container">
      {btnText && (
        <button className="dashbord-header-btn" onClick={handleClick}>
          {btnText}
        </button>
      )}

      <div className="dashbord-header-right">
        {/* <img
          src={NotificationIcon}
          alt="notification-icon"
          className="dashbord-header-icon"
        />s
        <img
          src={SettingsIcon}
          alt="settings-icon"
          className="dashbord-header-icon"
        /> */}
        <span onClick={getSellerProfile}>
        <img
          className="dashbord-header-avatar"
          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
        />
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
