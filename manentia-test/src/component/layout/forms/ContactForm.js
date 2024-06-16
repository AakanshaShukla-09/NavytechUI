import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

const logData = (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  console.log(form.formGridName.value);
  console.log(form.formGridComapnyName.value);
  console.log(form.formGridEmail.value);
  console.log(form.formGridNumber.value);
  console.log(form.formGridCompanySize.value);
  console.log(form.formGridTeam.value);
  console.log(form.formGridProjectBudget.value);
  console.log(form.formGridMessage.value);
};

function ContactForm() {
  return (
    <div>
      <Form onSubmit={logData}>
        <Row className="mb-2 text-start">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control type="text" required="true" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridComapnyName">
            <Form.Label>Company name *</Form.Label>
            <Form.Control type="text" required="true" />
          </Form.Group>
        </Row>

        <Row className="mb-2 text-start">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Work Email *</Form.Label>
            <Form.Control type="email" required="true" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Phone number *</Form.Label>
            <Form.Control type="tel" required="true" pattern="[0-9]{10}" />
          </Form.Group>
        </Row>

        <Row className="mb-2 text-start">
          <Form.Group as={Col} controlId="formGridCompanySize">
            <Form.Label>Company size</Form.Label>
            <Form.Select>
              <option value="small">1-10</option>
              <option value="mid">11-500</option>
              <option value="large">501+</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTeam">
            <Form.Label>Team</Form.Label>
            <Form.Select>
              <option value="engineering">Engineering</option>
              <option value="medical">Medical</option>
              <option value="civil">Civil</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-2 text-start">
          <Form.Group as={Col} controlId="formGridProjectBudget">
            <Form.Label>Project Budget *</Form.Label>
            <Form.Select>
              <option value="$20,000+">$20,000+</option>
              <option value="$100,000+">$100,000+</option>
              <option value="$1,000,000+">$1,000,000+</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-2 text-start">
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
        </Row>
        <Row className="mx-1 py-2">
          <Button size="lg" variant="primary" type="submit">
            Let's Talk
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default ContactForm;
