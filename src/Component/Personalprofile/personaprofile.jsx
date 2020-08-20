import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import css
import "../../Component/Personalprofile/personalprofile.css";

// Import Icon Profile
import icon_name from "../../Assets/icon-images/profile/name.png";
import icon_post_office from "../../Assets/icon-images/profile/local_post_office.png";
import icon_phone from "../../Assets/icon-images/profile/phone.png";
import icon_map from "../../Assets/icon-images/profile/map.png";

// import PP
import photo_profile from "../../Assets/images/profile-img-big.png";

export default function Personaprofile() {
  return (
    <div>
      <div className="">
        <Container>
          <Row>
            <Col>Personal Info</Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col sm="1">
                  {" "}
                  <img className="icon-profile-size" src={icon_name} alt="" />
                </Col>
                <Col>
                  <div> Aziz</div>
                  <div>Full Name</div>
                </Col>
                <Container>
                  <Row>
                    <Col sm="1">
                      {" "}
                      <img
                        className="icon-profile-size"
                        src={icon_post_office}
                        alt=""
                      />
                    </Col>
                    <Col>
                      <div>Rizkyaziz15@gmail.com</div>
                      <div>Email</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="1">
                      {" "}
                      <img
                        className="icon-profile-size"
                        src={icon_phone}
                        alt=""
                      />
                    </Col>
                    <Col>
                      <div>0812-2556-8892-9918</div>
                      <div>Mobile Phone</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="1">
                      {" "}
                      <img
                        className="icon-profile-size-2"
                        src={icon_map}
                        alt=""
                      />
                    </Col>
                    <Col>
                      <div>Malang City , East Java</div>
                      <div>Address</div>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Col>
            <Col>
              <Row>
                {" "}
                <Col sm="1">
                  <img src={photo_profile} alt="" />{" "}
                </Col>
              </Row>
              <Row>
                <div>
                  <Col>
                    <Button className="btn-center" variant="warning">
                      Change Photo Profile
                    </Button>
                  </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
