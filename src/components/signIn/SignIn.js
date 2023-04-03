import React, { useState } from "react";
import { Link } from "react-router-dom";
import signinImg from "../../imgs/Register/signin.png";
import "../../App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

const SignIn = () => {
  //Show Password handling
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  //Validation fields
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
    <div className="row bgSignIn ">      
      <div className="col-6 p-5">
        <div className="mt-5 mx-5 pb-5 pt-3">
          <h1
            className="text-center text-wrap text-white"
            style={{
              fontFamily: "Avenir LT Std",
              fontSize: 55,
              paddingTop: 30,
            }}
          >
            <b> WELCOME TO GPS OFFERT</b>
          </h1>
        </div>

        <div className="container">
          <div className="text-center pt-4">
            <img src={signinImg} className="img-fluid" width="50%" />
          </div>
        </div>
      </div>

      <div className="col-6 p-5 mt-5">
        <div className="mt-5 mx-5">
          <div className="mt-5 mx-5 pt-5 ">
            <h3 className="gpsOfferText display-5 text-center">
              <b>GPS OFFERT</b>
            </h3>
          </div>
          <div className="mb-4 mx-5 pb-4 ">
            <h6 className="display-14 text-center lead">
              Please Signin to your account
            </h6>
          </div>
        </div>

        <div className="pt-3 mx-4 px-3 pb-5">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3 px-5" controlId="inputEmail">
              <Form.Label className="mb-2">
                <b>Email</b>
              </Form.Label>
              <Form.Control
                className="rounded-4 shadow"
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 px-5" controlId="inputPass">
              <Form.Label className="mb-2">
                <b>Password</b>
              </Form.Label>
              <Form.Control
                className="rounded-4 shadow"
                type={passwordShown ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 px-5" controlId="formBasicCheckbox">
              <div className="row">
                <div className="col-5">
                  <Form.Check type="checkbox" label="Show password" onClick={togglePassword}/>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <a className="display-13">Forgot your password?</a>
                </div>
              </div>
            </Form.Group>

            <div className="m-5 text-center d-grid gap-2">
              <Button
                className="px-5 py-2 rounded-5 submitBtn text-white"
                variant="green"
                type="submit"
              >
                <Link className="text-white" to="/home">
                  <b>Sign In</b>
                </Link>
              </Button>
              <p style={{color: 'green'}}>
                Don't have account?{" "}
                <Link style={{color: 'green'}} className="display-13" to="/register">
                  Register{" "}
                </Link>{" "}
                here
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
