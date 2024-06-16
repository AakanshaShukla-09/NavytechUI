import React from "react";
import Button from "react-bootstrap/Button";
import HeroImage from "../../resources/HeroImage.svg";
import { Card, Col, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div class="bg-black vh-auto py-5">
      <div class="container">
        <div class="row my-4">
          <div class="col py-5">
            <div class=" text-white text-start">
              <h1 style={{ fontSize: "3.8rem" }}>
                #1 Worldwide Digital <br />
                Solution Agency
              </h1>
            </div>
            <div class=" text-white text-start py-2">
              <p style={{ fontSize: "1.2rem" }}>
                Revolutionize your global digital strategy with the #1 Worldwide
                Digital Solution Agency, pioneering innovative solutions for
                unparalleled success.
              </p>
            </div>
            <div class="pt-5 pb-3 text-start">
              <btn class="btn-bg">
                <i class="bi bi-telephone-fill" style={{ padding: "0px 0px" }}>
                  &nbsp; Book a call &nbsp;&nbsp;
                </i>
              </btn>
            </div>
            <br></br>
            <br></br>
            <div class=" text-white pt-2 gap-3">
              <Row>
                <Col>
                  <Card className="count-card justify-content-centre">
                    <Card.Body>
                      <Card.Title
                        className="text-centre"
                        style={{ fontSize: "1.2rem" }}
                      >
                        <h2>75K+</h2>
                      </Card.Title>
                      <Card.Text className="info">Projects Completed</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card className="count-card ">
                    <Card.Body>
                      <Card.Title>
                        <h2>20+</h2>
                      </Card.Title>
                      <Card.Text className="info">
                        Years of Experience
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card className="count-card ">
                    <Card.Body>
                      <Card.Title>
                        <h2>400+</h2>
                      </Card.Title>
                      <Card.Text className="info">Clients Worldwide</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <div class="col text-white text-end">
            <img src={HeroImage} alt="heroImage" width="90%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
