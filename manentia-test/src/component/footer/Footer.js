import React from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
  Button,
} from "react-bootstrap";
import Logo from "../../resources/Logo.svg";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <nav class="nav bg-black">
        <div class="container pt-5 text-start">
          <Row className="nav bg-black text-white">
            <Col className="mx-5">
              <div>
                <img src={Logo} alt="logo"></img>
              </div>
              <h3 class="pb-5">Navytech</h3>
              <h5>hello@navyatech.com</h5>
              <h5>phone: +0123456789</h5>

              <div class="d-flex gap-4 mx-3 my-5 ">
                <i class="bi bi-facebook text-white"></i>
                <i class="bi bi-twitter text-white"></i>
                <i class="bi bi-instagram text-white"></i>
                <i class="bi bi-linkedin text-white"></i>
                <i class="bi bi-youtube text-white"></i>
              </div>
            </Col>
            <Col>
              <h3 class="pb-2">Quick Links</h3>
              <p>Services</p>
              <p>Portfolio</p>
              <p>About us</p>
              <p>Testimonial</p>
            </Col>
            <Col>
              <h3 class="pb-2">Resources</h3>
              <p>Support</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </Col>

            <Col>
              <h3 class="pb-2">Subscribe</h3>
              <div>
                <Form xs={2}>
                  <Form.Group className="mb-5">
                    <Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text className="footer-email">
                          <i class="bi bi-envelope text-white"></i>
                        </InputGroup.Text>
                        <Form.Control
                          className="footer-email"
                          id="inlineFormInputGroup"
                          type="email"
                          placeholder="name@domain.com"
                        />
                        <Button variant="primary" className="">
                          Send
                        </Button>
                      </InputGroup>
                    </Form.Label>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
