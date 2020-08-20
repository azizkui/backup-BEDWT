import React from "react";
import { Dropdown } from "react-bootstrap";
import "../Login/afterlogin.css";

// Import Images
import icon from "../../Assets/icon-images/Icon.png";
import img_profile from "../../Assets/icon-images/profile-img.png";
import user from "../../Assets/icon-images/user.png";
import logout from "../../Assets/icon-images/logout.png";
import bill from "../../Assets/icon-images/bill.png";

export default function Afterlogin() {
  return (
    <div className="bg-img">
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
            <Dropdown>
              <Dropdown.Toggle variant="light" id="">
                <img className="img-profile" src={img_profile} alt="" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <img className="img-icon" src={user} alt="" /> Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <img className="img-icon" src={bill} alt="" />
                  Pay
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <img className="img-icon" src={logout} alt="" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
