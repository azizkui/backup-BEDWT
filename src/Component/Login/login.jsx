import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="login" variant="light" onClick={handleShow}>
        Login
      </Button>{" "}
      {/* Modal Login */}
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <div className="modal-login-title">
              <h1>Login</h1>
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-email">Email</Form.Label>
              <Form.Control
                className="size-text-email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-password">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="warning" type="submit" className="btn-login" block>
              Login
            </Button>
            <Form.Text className="text-muted center-text-account">
              Don't have an account? ? Clik Here !!!
            </Form.Text>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
