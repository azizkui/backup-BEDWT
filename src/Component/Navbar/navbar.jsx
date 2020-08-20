import React from "react";
import { Form } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <div className="title-position">
        <div className="title-web">
          &nbsp;
          <div className="explore">Explore</div>
          <div className="yact">your amazing city together</div>
        </div>
      </div>
      <div className="parrents-se">
        <div className="parrent-search-engine">
          <div className="text-search">Find great places to holliday</div>
          <div className="action-search-engine">
            <Form.Control type="email" placeholder="Enter Your Destination" />
            <button className="btn-input-text">
              <div className="search-text">Search</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
