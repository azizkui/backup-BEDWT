import React from "react";
import Destination from "../../../Component/Destination/destination";
import Login from "../../../Component/Login/afterlogin";
import Footer from "../../../Component/Footer/footer";

import { Container, Col, Button, Row } from "react-bootstrap";
export default function incometrip() {
  return (
    <div>
      <Login />
      <Container>
        <Row>
          <Col>
            <div> Income Trip</div>
          </Col>
          <Col>
            <Button variant="warning">Add Trip</Button>
          </Col>
        </Row>
      </Container>

      <Destination />
      <Footer />
    </div>
  );
}
