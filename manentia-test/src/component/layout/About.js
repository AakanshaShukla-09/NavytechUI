import React from "react";
import About1 from "../../resources/About1.svg";
import About2 from "../../resources/About2.svg";
import About3 from "../../resources/About3.svg";
import { Button } from "react-bootstrap";

function About() {
  return (
    <div class=" mx-auto">
      <div class="mb-5">
        <br></br>
        <h3 class="text-muted mt-5">About us</h3>
        <h2 class="text-dark mb-5">Why we are best</h2>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <div class="row pb-2">
                  <img src={About1} />
                </div>
                <div class="row pt-3">
                  <img src={About2} />
                </div>
              </div>
              <div class="col pb-5">
                <img src={About3} />
              </div>
            </div>
          </div>
          <div class="col">
            <p class="text-start " style={{ fontSize: "1.20rem" }}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
              dolor fringilla volutpat lectus amet. Integer sed pretium odio
              lectus at malesuada sed eget nunc. Viverra malesuada viverra id
              vel tortor dui adipiscing. Bibendum cras fringilla amet
              suspendisse. Duis mattis hac urna fames in ante.
            </p>

            <div class="d-flex ">
              <div class="p-1">
                <i
                  class="bi bi-eye"
                  style={{ fontSize: "4rem", color: "blue" }}
                ></i>
              </div>
              <div class="px-4 text-start">
                <h2 class=" pt-4">Our Vision</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget
                  at. Id et at dui arcu risus.
                </p>
              </div>
            </div>
            <div class="d-flex ">
              <div class="p-1">
                <i
                  class="bi bi-bullseye"
                  style={{ fontSize: "4rem", color: "blue" }}
                ></i>
              </div>
              <div class="px-4 text-start">
                <h2 class=" pt-2">Our Mission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu habitasse
                  fusce pharetra.
                </p>
              </div>
            </div>
            <div class="d-flex pt-5">
              <Button variant="primary" style={{ fontSize: "2rem" }}>
                Read More &nbsp; <i class="bi bi-arrow-right"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
