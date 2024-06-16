import React from "react";
import Device1 from "../../resources/Device1.svg";
import Device2 from "../../resources/Device2.svg";
import Device3 from "../../resources/Device3.svg";
import Device4 from "../../resources/Device4.svg";
import Device5 from "../../resources/Device5.svg";
import Device6 from "../../resources/Device6.svg";
import { Button } from "react-bootstrap";

function Portfolio() {
  return (
    <div class="bg-black">
      <div class="mb-5">
        <br></br>
        <h3 class="text-muted mt-5">Portfolio</h3>
        <h2 class="text-light mb-5">Our Previous works</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col outline-light">
            <img src={Device1} />
          </div>
          <div class="col">
            <img src={Device2} />
          </div>
          <div class="col">
            <img src={Device3} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src={Device4} />
          </div>
          <div class="col">
            <img src={Device5} />
          </div>
          <div class="col">
            <img src={Device6} />
          </div>
        </div>
        <div class="row" className="mt-5 pb-5">
          <btn class="btn-bg">
            View more &nbsp; <i class="bi bi-arrow-right"></i>
          </btn>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
