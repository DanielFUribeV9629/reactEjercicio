import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

const ClientRegistry = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
    <Card>
      <Card.Header as="h5" className="mb-2">Registry your info</Card.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md>  
            <FloatingLabel controlId="floatingInputName" label="Name">
              <Form.Control required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputLastName" label="Last Name">
              <Form.Control required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid lastname.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md>
            <FloatingLabel controlId="floatingSelectDoc" label="Type of ID">
              <Form.Select required>
                <option>Select a valid ID</option>
                <option value="1">National Document</option>
                <option value="2">Foreign Document</option>
                <option value="3">Pasport</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid id.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingInputDocNumber"
              label="ID Number"
              className="mb-3"
            >
              <Form.Control required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid id number.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <InputGroup className="mb-3" hasValidation>
            <FloatingLabel
              controlId="floatingSelectDomain"
              label="Email address"
            >
              <Form.Control required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </FloatingLabel>
            <InputGroup.Text id="basic-addon2">
              <Form.Select required>
                <option value="1">@gmail.com</option>
                <option value="2">@hotmail.com</option>
                <option value="3">@outlook.com</option>
              </Form.Select>
            </InputGroup.Text>
          </InputGroup>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card> 
  );
};

export default ClientRegistry;
