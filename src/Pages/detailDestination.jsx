import React from "react";
import Header from "../Component/Header/header";
import Contentdetail from "../Component/Contentdetail/contentdetail";
import Footer from "../Component/Footer/footer";
function detailDestination() {
  // const { id } = match.params;
  return (
    <div>
      <Header />
      <Contentdetail />
      <Footer />
    </div>
  );
}

export default detailDestination;
