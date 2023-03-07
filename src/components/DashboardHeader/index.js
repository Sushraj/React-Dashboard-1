import React from "react";

import "./styles.css";
import { useNavigate } from "react-router-dom";

function DashboardHeader({ btnText, onClick }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/add-product");
  }

  function getSellerProfile() {
    navigate("/profile");
  }

  return (
    <div className="dashbord-header-container">
      {btnText && (
        <button className="dashbord-header-btn" onClick={handleClick}>
          {btnText}
        </button>
      )}

      <div className="dashbord-header-right">
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
