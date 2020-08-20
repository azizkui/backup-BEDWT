import React from "react";
import Login from "../../../Component/Login/afterlogin";
import Listtransactioncomp from "../../../Component/Admin/Listtransactioncomp/listtransactioncomp";
import Footer from "../../../Component/Footer/footer";
export default function listtransaction() {
  return (
    <div>
      <Login />
      <Listtransactioncomp />
      <Footer />
    </div>
  );
}
