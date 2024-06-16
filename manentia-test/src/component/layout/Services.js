import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PaintBrush from "../../resources/PaintBrush.svg";
import Globe from "../../resources/Globe.svg";
import Mobile from "../../resources/Mobile.svg";
import CreditCard from "../../resources/CreditCard.svg";
import MyHeader from "../header/MyHeader";
import Footer from "../footer/Footer";
import SocialProof from "./SocialProof";

const Services = () => {
  return (
    <>
      {/* <MyHeader /> */}
      <SocialProof />
      <div class=" mx-auto py-2">
        <div class="mb-5">
          <br></br>
          <h3 class="text-muted mt-5">Our Services</h3>
          <h2 class="text-dark mb-5">Growth based Services</h2>
        </div>

        <div class="container">
          <div class="row mx-auto pb-5">
            <div class="col-3">
              <Card className="py-5">
                <Card.Img
                  variant="top"
                  src={PaintBrush}
                  width={75}
                  height={75}
                />

                <Card.Body>
                  <Card.Title>Branding and UI/UX</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Quam diam augue
                    lectus vivamus metus
                  </Card.Text>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    view details <i class="bi bi-chevron-right "></i>{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-3">
              <Card className="py-5">
                <Card.Img variant="top" src={Globe} width={75} height={75} />

                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Quam diam augue
                    lectus vivamus metus
                  </Card.Text>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    view details <i class="bi bi-chevron-right "></i>{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-3">
              <Card className="py-5">
                <Card.Img variant="top" src={Mobile} width={75} height={75} />
                <Card.Body>
                  <Card.Title>Mobile Development</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Quam diam augue
                    lectus vivamus metus
                  </Card.Text>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    view details <i class="bi bi-chevron-right "></i>{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-3">
              <Card className="py-5">
                <Card.Img
                  variant="top"
                  src={CreditCard}
                  width={75}
                  height={75}
                />
                <Card.Body>
                  <Card.Title>Digital Marketing</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Quam diam augue
                    lectus vivamus metus
                  </Card.Text>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    view details <i class="bi bi-chevron-right "></i>{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Services;
