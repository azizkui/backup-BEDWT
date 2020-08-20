import React from "react";
// import { Button, Modal, Form, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../Styles/Home.css";
// Import Component
import Header from "../Component/Header/header";
import Navbar from "../Component/Navbar/navbar";
import Content from "../Component/Content/content";
import Footer from "../Component/Footer/footer";

function Home() {
  return (
    <div>
      <div className="image-top">
        <Header />
        <Navbar />
        <Content />
        &nbsp;
        <Footer />
      </div>
    </div>
  );
}

export default Home;
