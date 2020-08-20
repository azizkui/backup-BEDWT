import React from "react";
import Login from "../Login/login";
import Register from "../Register/register";

// Import Images
import icon from "../../Assets/icon-images/Icon.png";

export default function Header() {
  return (
    <div className="parrent-header">
      <div className="header">
        <img
          className="logo-app"
          src={icon}
          width="189px"
          height="68px"
          alt=""
        />
        <div className="btn-action">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
}
