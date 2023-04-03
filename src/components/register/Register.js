import React, { useState } from "react";
import { Link } from "react-router-dom";
import registerImg from "../../imgs/Register/register1.png";
import "../../App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import clientRegistryServ from "../../services/clientRegistryServ/clientRegistryServ";


const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }
  /*
  const callMessage = () => {
    clientRegistryServ.postClientRegistry();
  }*/
  ;

  return (
    <div className="row container-fluid">
      <div className="col-4 mainRegister">
        <div className="mt-5 mx-5">
          <h1
            className="text-center text-wrap text-white"
            style={{
              fontFamily: "Avenir LT Std",
              fontSize: 50,
              paddingTop: 15,
            }}
          >
            WELCOME TO GPS OFFERT
          </h1>
        </div>
        <div className="mt-5 mx-5">
          <div className="text-center">
            <img
              src={registerImg}
              className="img-fluid"
              width="90%"
              height="30"
            />
          </div>
        </div>
      </div>

      <div className="col-8 pt-5">
        <div className="pt-3 mx-5 px-4 pb-5">
          <div className="py-2">
            <h1 className="display-6">
              <b>Register Here</b>
            </h1>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="py-2">
              <FloatingLabel controlId="floatingInputEmail" label="Email">
                <Form.Control
                  className="rounded-4 shadow"
                  type="email"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </FloatingLabel>
            </div>
            <div className="py-3">
              <FloatingLabel controlId="floatingInputPass" label="Password">
                <Form.Control
                  className="rounded-4 shadow"
                  type="password"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
                <Form.Text muted>
                  Password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces or emoji.
                </Form.Text>
              </FloatingLabel>
            </div>

            <div className="row pt-2 pb-3">
              <div className="col-6">
                <FloatingLabel
                  controlId="floatingInputFirstName"
                  label="First Name"
                >
                  <Form.Control
                    className="rounded-4 shadow"
                    type="text"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </div>

              <div className="col-6">
                <FloatingLabel
                  controlId="floatingInputLastName"
                  label="Last Name"
                >
                  <Form.Control
                    className="rounded-4 shadow"
                    type="text"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid last name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-6">
                <FloatingLabel controlId="floatingInputCity" label="City">
                  <Form.Control
                    className="rounded-4 shadow"
                    type="text"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </div>

              <div className="col-6">
                <FloatingLabel
                  controlId="floatingInputCurrency"
                  label="Currency"
                >
                  <Form.Control
                    className="rounded-4 shadow"
                    type="text"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid currency.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </div>
            </div>

            <div className="py-3">
              <FloatingLabel controlId="floatingInputAddress" label="Address">
                <Form.Control
                  className="rounded-4 shadow"
                  type="text"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid address.
                </Form.Control.Feedback>
              </FloatingLabel>
            </div>

            <div className="row py-3">
              <div className="col-6">
                <FloatingLabel
                  controlId="floatingInputPostalCode"
                  label="Postal Code"
                >
                  <Form.Control
                    className="rounded-4 shadow"
                    type="number"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid postal code.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </div>

              <div className="col-6">
                <FloatingLabel
                  controlId="floatingInputPostalCode"
                  label="Phone"
                >
                  <Form.Control
                    className="rounded-4 shadow"
                    type="number"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </div>
            </div>

            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="By clicking this box. I agree to the terms and condition of gps offert, and be a member of it."
                required="required"
              />
            </Form.Group>

            <div className="row">
              <div className="col-3"></div>
              <div className="col-6 my-5 text-center d-grid gap-2">
                <Button
                  className="px-1 py-2 rounded-5 submitBtn text-white"
                  variant="light"
                  type="submit"                  
                >
                  <b>Register</b>
                </Button>
                <p style={{color: 'green'}}>
                  Already have an account?{" "}
                  <Link style={{color: 'green'}} className="display-13" to="/signIn">
                    SignIn{" "}
                  </Link>{" "}
                  here
                </p>
              </div>
              <div className="col-3"></div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
