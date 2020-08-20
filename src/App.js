import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import pages
import Home from "./Pages/Home.jsx";
import Destination from "./Pages/detailDestination";
import Profile from "./Pages/Profile";
import Listtransaction from "./Pages/Admin/Listtransaction/listtransaction.jsx";
import Incometrip from "./Pages/Admin/Incometrip/incometrip.jsx";
import Formtrip from "../src/Pages/Admin/Addtrip/addtrip";

// import component
import Payment from "./Component/Payment/payment";
import Afterlogin from "./Component/Login/afterlogin";

// import css
// import "./App.css";

function App() {
  return ( <
    Router >
    <
    Switch >
    <
    Route exact path = "/" >
    <
    Home / >
    <
    /Route>{" "} <
    Router path = "/details" >
    <
    Destination / >
    <
    /Router>{" "} <
    Router path = "/afterlogin" >
    <
    Afterlogin / >
    <
    /Router>{" "} <
    Router path = "/profile" > {
      " "
    } <
    Profile / > {
      " "
    } <
    /Router>{" "} <
    Router path = "/payment" >
    <
    Payment / >
    <
    /Router>{" "} <
    Router path = "/listtransaction" >
    <
    Listtransaction / >
    <
    /Router>{" "} <
    Router path = "/incometrip" >
    <
    Incometrip / >
    <
    /Router>{" "} <
    Router path = "/formtrip" >
    <
    Formtrip / >
    <
    /Router>{" "} <
    /Switch>{" "} <
    /Router>
  );
}

export default App;