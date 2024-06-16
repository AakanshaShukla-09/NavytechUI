import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Quote from "../../resources/Quote.svg";
import Michael from "../../resources/Michael.svg";
import Avril from "../../resources/Avril.svg";
import MyHeader from "../header/MyHeader";
import Footer from "../footer/Footer";

const Testimonial = () => {
  return (
    <>
      {/* <MyHeader /> */}

      <div class="bg-testimonial">
        <div class="mb-5">
          <br></br>
          <h3 class="text-muted mt-5">Testimonial</h3>
          <h2 class="text-dark mb-5">What Our Clients Say</h2>
        </div>
        <div class="container-sm">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div class="row mb-5">
                <div class="col">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={Quote}
                      width={45}
                      height={45}
                    />

                    <Card.Body>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque urna
                        vel sit dolor fringilla volutpat lectus amet. Integer
                        sed pretium odio lectus at malesuada sed eget nunc.
                        Viverra malesuada viverra id vel tortor dui adipiscing.
                      </Card.Text>
                      <div class="container">
                        <div class="row ">
                          <div class="col text-end">
                            <img src={Michael} width={75} height={75} />
                          </div>
                          <div class="col text-start">
                            <h6>Michael Wong</h6>
                            <h6 class="text-primary">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={Quote}
                      width={45}
                      height={45}
                    />

                    <Card.Body>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque urna
                        vel sit dolor fringilla volutpat lectus amet. Integer
                        sed pretium odio lectus at malesuada sed eget nunc.
                        Viverra malesuada viverra id vel tortor dui adipiscing.
                      </Card.Text>
                      <div class="container">
                        <div class="row">
                          <div class="col text-end">
                            <img src={Avril} width={75} height={75} />
                          </div>
                          <div class="col text-start">
                            <h6>Avril Song</h6>
                            <h6>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill "></i>
                              <i class="bi bi-star-fill "></i>
                              <i class="bi bi-star-fill "></i>
                              <i class="bi bi-star text-secondary"></i>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div class="row mb-5">
                <div class="col">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={Quote}
                      width={45}
                      height={45}
                    />

                    <Card.Body>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque urna
                        vel sit dolor fringilla volutpat lectus amet. Integer
                        sed pretium odio lectus at malesuada sed eget nunc.
                        Viverra malesuada viverra id vel tortor dui adipiscing.
                      </Card.Text>
                      <div class="container">
                        <div class="row ">
                          <div class="col text-end">
                            <img src={Michael} width={75} height={75} />
                          </div>
                          <div class="col text-start">
                            <h6>Michael Wong</h6>
                            <h6 class="text-primary">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={Quote}
                      width={45}
                      height={45}
                    />

                    <Card.Body>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque urna
                        vel sit dolor fringilla volutpat lectus amet. Integer
                        sed pretium odio lectus at malesuada sed eget nunc.
                        Viverra malesuada viverra id vel tortor dui adipiscing.
                      </Card.Text>
                      <div class="container">
                        <div class="row">
                          <div class="col text-end">
                            <img src={Avril} width={75} height={75} />
                          </div>
                          <div class="col text-start">
                            <h6>Avril Song</h6>
                            <h6>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill "></i>
                              <i class="bi bi-star-fill "></i>
                              <i class="bi bi-star-fill "></i>
                              <i class="bi bi-star text-secondary"></i>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Testimonial;
