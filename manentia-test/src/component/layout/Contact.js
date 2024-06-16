import React from "react";
import Samsung from "../../resources/Samsung.svg";
import Visma from "../../resources/Visma.svg";
import Bolt from "../../resources/Bolt.svg";
import Aws from "../../resources/Aws.svg";
import Accenture from "../../resources/Accenture.svg";
import At from "../../resources/At.svg";
import ContactForm from "./forms/ContactForm";

const Contact = () => {
  return (
    <div class="container pt-5">
      <div class="row pb-5">
        <div class="col text-start ">
          <a href="/" style={{ color: "black", textDecoration: "none" }}>
            <i class="bi bi-arrow-left "></i>Home{" "}
          </a>
          <div class="d-flex text-dark text-start pb-5">
            <h1>Contact</h1>
          </div>
          <div class="d-inline-flex">
            <div class="p-1">
              <i class="bi bi-envelope" style={{ color: "blue" }}></i>
            </div>
            <div class="p-1 pb-3">CONTACT SALES</div>
          </div>
          <div class="d-flex text-dark text-start">
            <h1>
              Talk to our account <br />
              expert
            </h1>
          </div>
          <div class="d-flex text-dark text-start py-2">
            <p>
              Have questions about integrating our APIs? Fill out the form and a
              senior web <br /> expert will be in touch shortly.
            </p>
          </div>
          <div
            class="d-flex text-primary text-start py-2"
            style={{ fontSize: "1.25rem" }}
          >
            <p>Join 6,000+ forward-thinking companies:</p>
          </div>
          <div class="d-flex gap-4">
            <img src={Samsung} alt="samsung"></img>
            <img src={Visma} alt="visma"></img>
            <img src={Bolt} alt="bolt"></img>
            <img src={Aws} alt="aws"></img>
            <img src={Accenture} alt="accenture"></img>
            <img src={At} alt="at"></img>
          </div>
        </div>
        <div class="col">
          <div class="d-flex text-dark  text-start pb-3">
            <h6>Fill the form below</h6>
          </div>

          <ContactForm />

          <div class="d-flex text-secondary text-start py-2 ">
            By submitting this, you agree to the&nbsp;
            <a href="/" style={{ color: "black" }}>
              Privace Policy
            </a>
            &nbsp;and&nbsp;
            <a href="/" style={{ color: "black" }}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
