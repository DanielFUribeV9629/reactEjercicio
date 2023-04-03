import React from "react";
import { useLocation } from "react-router-dom";
import imageGpsOffer from "../../logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../App.css";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const Header = () => {

  const { pathname } = useLocation();

  if (pathname === "/signIn" || pathname === "/register") {
    return <></>;
  }

  return (
    <div className="row container-fluid headerBar">
      <Navbar fixed="top" className="headerBar">
        <div className="col-4  px-5">
          <Navbar.Brand href="/home">
            <img
              src={imageGpsOffer}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Offer to you logo"
            />{" "}
            OfferToYou
          </Navbar.Brand>
        </div>
        <div className="col-4 pt-3 px-5">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/featur">Dashboard</Nav.Link>
            <Nav.Link href="/faq">FAQs</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
          </Nav>
        </div>
        <div className="col-4 d-flex px-4 pt-4 justify-content-end">
          <div className="row">
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton
                className="registerBtn text-white"
                variant="green"
                value={1}
              >
                <Nav.Link href="/register">Register</Nav.Link>
              </ToggleButton>
              <ToggleButton
                className="signInBtn text-dark"
                variant="light"
                value={2}
              >
                <Nav.Link href="/signIn">Sign In</Nav.Link>
              </ToggleButton>
            </ToggleButtonGroup>
            {/*
            <div className="col-6">
              <Button className="registerBtn text-white" variant="green">
                Register
              </Button>
            </div>
            <div className="col-6">
              <Button className="signInBtn text-dark" variant="light">
                Sign In
              </Button>
            </div>
            */}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
