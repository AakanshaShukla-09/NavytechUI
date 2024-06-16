import React from "react";
import Button from "react-bootstrap/Button";
import HeroImage from "../../resources/HeroImage.svg";
import { Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div class="bg-black vh-auto py-4">
      <div class="container">
        <div class="row">
          <div class="col py-5">
            <div class="d-flex text-white text-start">
              <h1 style={{ fontSize: "3.8rem" }}>
                #1 Worldwide Digital <br />
                Solution Agency
              </h1>
            </div>
            <div class="d-flex text-white text-start py-2">
              <p style={{ fontSize: "1.2rem" }}>
                Revolutionize your global digital strategy with the #1 Worldwide
                Digital Solution Agency, pioneering innovative solutions for
                unparalleled success.
              </p>
            </div>
            <div class="d-flex pt-5 pb-3">
              <Button variant="primary">
                <i
                  class="bi bi-telephone-fill justify-content-centre mx-3"
                  style={{ fontSize: "2rem" }}
                >
                  &nbsp; Book a call &nbsp;&nbsp;
                </i>
              </Button>
            </div>
            <br></br>
            <br></br>
            <div class="d-flex text-white pt-2  ">
              <Card className="count-card" style={{ width: "12rem" }}>
                <Card.Body>
                  <Card.Title>
                    <h2>75K+</h2>
                  </Card.Title>
                  <Card.Text className="info">Projects Completed</Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem" }} className="count-card mx-3 ">
                <Card.Body>
                  <Card.Title>
                    <h2>20+</h2>
                  </Card.Title>
                  <Card.Text className="info">Years of Experience</Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem" }} className="count-card ">
                <Card.Body>
                  <Card.Title>
                    <h2>400+</h2>
                  </Card.Title>
                  <Card.Text className="info">Clients Worldwide</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col text-white">
            <img src={HeroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
