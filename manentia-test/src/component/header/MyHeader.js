import React from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../resources/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

function MyHeader() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/talk-to-us");
  };
  return (
    <div class="bg-black outline-dark pt-4">
      <div class="container">
        <div class="d-flex justify-content-between outline-dark">
          <nav>
            <img src={Logo} class=""></img>
          </nav>
          <nav class="nav gap-3">
            {" "}
            <li class="nav-item">
              <Link class="nav-link mx-auto p-2" to="/services">
                <p class="text-white bg-black">Services </p>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-auto p-2" to="/portfolio">
                <p class="text-white bg-black "> Portfolio</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-auto p-2" to="/about">
                <p class="text-white bg-black">About us</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-auto p-2" to="/testimonial">
                <p class="text-white bg-black">Testimonial</p>
              </Link>
            </li>
            <li class="nav-item mx-auto p-2">
              <i class="bi bi-search" style={{ color: "white" }}></i>
            </li>
          </nav>
          <nav>
            <Button variant="outline-light" onClick={() => handleButtonClick()}>
              <i class="bi bi-telephone-fill"> &nbsp; Talk to us</i>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
