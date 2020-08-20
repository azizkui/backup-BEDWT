import React from "react";
// import css
import "../Formtrip/formtrip.css";
// import component bootstrap
import { Form, Button, Col, Row } from "react-bootstrap";
export default function formtrip() {
  return (
    <div>
      <div className="asd">Add Trip</div>
      <div className="flex-form">
        <Form>
          <Form.Group>
            <Form.Label>Title Trip</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control as="select">
              <option>America</option>
              {/* <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option> */}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Transportation</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Eat</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Row>
              <Col sm="2">
                <Form.Control type="text" />
              </Col>
              <Col sm="0">
                <Form.Label>Day</Form.Label>
              </Col>
              <Col sm="2">
                <Form.Control type="text" />
              </Col>
              <Col sm="2">
                <Form.Label>Night</Form.Label>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quota</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.File id="exampleFormControlFile1" label="Import Your Image" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Button variant="warning">Add Trip</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
