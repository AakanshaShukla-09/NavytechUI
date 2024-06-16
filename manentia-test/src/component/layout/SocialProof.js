import React from "react";
import googleLogo from "../../resources/googleLogo.svg";
import CanvaLogo from "../../resources/CanvaLogo.svg";
import AmazonLogo from "../../resources/AmazonLogo.svg";
import SketchLogo from "../../resources/SketchLogo.svg";

const SocialProof = () => {
  return (
    <div class="py-3" style={{ background: "navy" }}>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <h5 class="text-light text-start">Trusted by</h5>
            <h3 class="text-white text-start">Top companies</h3>
          </div>
          <div class="col ">
            <div class="row mt-3">
              <div class="d-inline-flex">
                <div class="col text-white">
                  <img src={googleLogo} alt="google" />
                </div>

                <div class="col text-white">
                  <img src={AmazonLogo} alt="amazon" />
                </div>
                <div class="col text-white">
                  <img src={CanvaLogo} alt="canva" />
                </div>
                <div class="col text-white">
                  <img src={SketchLogo} alt="sketch" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
