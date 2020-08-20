import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

import "../Payment/payment.css";
import Afterlogin from "../Login/afterlogin";
import Footer from "../Footer/footer";

// Import Images
import icon_dw_black from "../../Assets/icon-images/dewetouriconblack.png";
import bill from "../../Assets/images/fotostruk.png";

export default function Payment() {
  return (
    <div>
      <Afterlogin />
      <div className="bg-grey">
        <div class="flexbox-payment">
          <div className="box-payment">
            <Container>
              <Row>
                <Col xs={9}>
                  <img className="icon-dw-black" src={icon_dw_black} alt="" />
                </Col>
                <Col>
                  <div className="text-booking">Booking</div>
                  <div className="date-booking">Saturday, 22 Juy 2020</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col xs={12} md={4}>
                      <div className="text-title-left-destination ">
                        6D/4N Fun Tassie Vacation
                      </div>
                      <div className="text-desc-destination">Australia</div>
                    </Col>
                    <Col>
                      <div className="text-title-destination ">Date Trip</div>
                      <div className="text-desc-destination">
                        26 August 2020
                      </div>
                    </Col>
                    <Col xs={6} md={5}>
                      <div className="text-title-destination">Duration</div>
                      <div className="text-desc-destination">6 Day 4 Nght</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={4}>
                      <div className="waiting-approve">Waiting Approve</div>
                    </Col>
                    <Col xs={6} md={3}>
                      {" "}
                      <div className="text-title-destination">Accomodation</div>
                      <div className="text-desc-destination">Hotel 4 Night</div>
                    </Col>
                    <Col>
                      <div className="text-title-destination">
                        Transportation
                      </div>
                      <div className="text-desc-destination">
                        Qatar Air Ways
                      </div>
                    </Col>
                    <Col></Col>
                  </Row>
                </Col>

                <Col>
                  <img src={bill} alt="" />
                  <div>upload payment proof</div>
                </Col>
              </Row>
            </Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Burayak</td>
                  <td>Male</td>
                  <td>0812776354672</td>
                  <td>QYT : </td>
                  <td>1 </td>
                </tr>
                <tr>
                  <td colSpan="4"></td>
                  <td> Total :</td>
                  <td> IDR. 12,398,000 </td>
                </tr>
              </tbody>
            </Table>
            <div className="flex-btn-pay">
              <Button className="btn-pay-text-style" variant="warning">
                Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
