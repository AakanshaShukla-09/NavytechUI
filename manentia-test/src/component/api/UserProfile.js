import React from "react";
import Uk from "../../resources/Uk.svg";
import Notification from "../../resources/Notification.svg";
import Person from "../../resources/Person.svg";
import Avtar from "../../resources/Avtar.svg";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import CustomerTable from "../layout/CustomerTable";

function UserProfile() {
  return (
    <div class="container pt-5">
      <div class="row px-4 vh-auto">
        <div class="col">
          <div class="d-flex justify-content-start ">
            <i class="bi bi-search"></i>
          </div>
        </div>
        <div class="col">
          <div class="d-flex justify-content-end gap-3">
            <div class="p-1">
              <Image src={Uk} alt="uk"></Image>
            </div>
            <div>
              <Image src={Notification} alt="notification"></Image>
            </div>
            <div>
              <Image src={Person} alt="person"></Image>
            </div>
            <div>
              <Image src={Avtar} alt="avtar" roundedCircle></Image>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <nav class="nav bg-white  pb-5"></nav>
        <div class="text-start">
          <h1>Customers</h1>
          <div class="d-flex pb-3">
            <Button variant="white" style={{ fontSize: "1.2rem" }}>
              <i class="bi bi-download"></i>&nbsp;Import
            </Button>{" "}
            <Button variant="white" style={{ fontSize: "1.2rem" }}>
              <i class="bi bi-upload"></i>&nbsp;Export
            </Button>{" "}
            <div class="ms-auto">
              <Button variant="primary" style={{ fontSize: "1.2rem" }}>
                <i class="bi bi-plus"></i>&nbsp;Add
              </Button>{" "}
            </div>
          </div>
        </div>
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link>All</Nav.Link>
          </Nav.Item>
        </Nav>
        <CustomerTable />
      </div>
    </div>
  );
}

export default UserProfile;
