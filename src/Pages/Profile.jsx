import React from "react";
import Afterlogin from "../Component/Login/afterlogin";
import Personalprofile from "../Component/Personalprofile/personaprofile";
import Footer from "../Component/Footer/footer";

export default function Profile() {
  return (
    <div>
      <Afterlogin />
      <Personalprofile />
      <Footer />
    </div>
  );
}
