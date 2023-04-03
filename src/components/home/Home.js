import React, { useState } from "react";
import logo from "../../logo.svg";
import knowFuture from "../../imgs/Home/knowFuture.png";
import pinLoc from "../../imgs/Home/pinLoc.png";
import cel from "../../imgs/Home/cel.png";
import leftButton from "../../imgs/Home/leftButton.png";
import rightButton from "../../imgs/Home/rightButton.png";
import storesAvailable from "../../imgs/Home/storesAvailable.png";
import firendlyInterface from "../../imgs/Home/firendlyInterface.png";
import customerService from "../../imgs/Home/customerService.png";
import downloadApp from "../../imgs/Home/downloadApp.png";
import Button from "react-bootstrap/Button";
import googlePlay from "../../imgs/sm.png";
import appleStore from "../../imgs/apple/sm.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const Home = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const myfunctionL = () => {
    console.log("CLICKED L");
  };

  const myfunctionR = () => {
    console.log("CLICKED R");
  };

  return (
    <div className="">
      <div className="pt-4">
        <div className="row headerBar1 boxBg pb-2">
          <div className="row headerBar boxBg pb-3">
            <div className="row headerBar boxBg shadow pt-5 pb-5">
              <div className="col-5 pt-3 px-5 ">
                <h1 className="display-4 downloadStyle pt-3 pb-3 px-4">
                  Know The Future Store Locator
                </h1>
                <p className="pb-4 px-4">
                  Find a store near you before heading out Tomorrow!
                </p>
                <div className="px-4">
                  <Button
                    className="findStoreBtn text-white px-5 py-1"
                    variant="primary"
                    type="submit"
                  >
                    <b>Find Store</b>
                  </Button>
                </div>
              </div>
              <div className="col-7 px-5 pb-4">
                <div className="text-center">
                  <img alt="logo" src={knowFuture} width="550px" />
                </div>
              </div>
              <div className="row">
                .<div>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h3 className="display-6 downloadStyle pb-3 text-center">
          <strong>About US</strong>
        </h3>
        <div className="col-6">
          <div className="row py-3">
            <div className="col-5"></div>
            <div className="col-1">
              <div className="button5">
                <img src={leftButton} alt="leftButton" onClick={myfunctionL} />
              </div>
            </div>
            <div className="col-1">
              <div className="button5">
                <img src={rightButton} alt="rightButton" onClick={myfunctionR} />
              </div>
            </div>
            <div className="col-5"></div>
          </div>
          <div className="row">
            <div className="col-2 bg-white px-5"></div>
            <div className="col-10 ">
              <div>
                <div className="row bgAboutUs py-4 px-4">
                  <div className="col-2 py-3 text-center">
                    <img alt="pinLoc" src={pinLoc} width="80%" />
                  </div>
                  <div className="col-10 py-2 px-4 mb-5">
                    <p className="">
                      elit odio amet, id ultrices porta volutpat tincidunt
                      luctus Morbi non. odio faucibus nec lacus, Cras ex
                      elementum amet, sit adipiscing odio ex diam sapien Sed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-5 p-2 bgAboutUsTwo">
          <div className="row">
            <div className="py-2 text-center">
              <img alt="cel" src={cel} width="30%" />
            </div>
            <div className="row px-4">
              <p className="text-white px-5">
                elit odio amet, id ultrices porta volutpat tincidunt luctus
                Morbi non. odio faucibus nec lacus, Cras ex elementum amet, sit
                adipiscing odio ex diam sapien Sed
              </p>
            </div>
          </div>
        </div>
        <div className="col-1 bg-white px-5"></div>
      </div>
      <div className="row">
        <h3 className="display-6 downloadStyle pt-5 pb-3 text-center">
          Why Choose Gps Offert
        </h3>
        <div className="col-4 px-4">
          <div className="text-center">
            <img
              className="imageCircle"
              alt="logo"
              src={storesAvailable}
              width="250px"
            />
          </div>
          <h5 className="text-center pb-4">
            <strong>15+ Stores Available</strong>
          </h5>
          <p className="text-muted px-4">
            With Gps Offert you can browse through wide range of local stores
            located right next to your area
          </p>
        </div>
        <div className="col-4 px-4">
          <div className="text-center">
            <img
              className="imageCircle"
              alt="logo"
              src={firendlyInterface}
              width="250px"
            />
          </div>
          <h5 className="text-center pb-4">
            <strong>User-Friendly Interface</strong>
          </h5>
          <p className="text-muted px-4">
            With highliy User-Friendly Interface, user can locate location with
            ease and of course, less clicks !!
          </p>
        </div>
        <div className="col-4 px-4">
          <div className="text-center">
            <img
              className="imageCircle"
              alt="logo"
              src={customerService}
              width="250px"
            />
          </div>
          <h5 className="text-center pb-4">
            <strong>Responsive Customer Service</strong>
          </h5>
          <p className="text-muted px-4">
            Curteous treatment will make a customer a walking Advertisement. We
            absolutely follow that!
          </p>
        </div>
      </div>
      {/*
      <div>
        <div className="row">
          <h3 className="display-6 downloadStyle pt-5 pb-3 text-center">
            Places Near You:
          </h3>
        </div>
        <div className="row">
          <a className="display-15 downloadStyle d-flex justify-content-end px-5">
            View More
          </a>
        </div>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      */}
      <div className="row mt-5 py-1">
        <div className="col-6 text-center">
          <img alt="logo" src={downloadApp} width="400px" />
        </div>
        <div className="col-6">
          <h5 className="display-6 mt-4 mb-4 downloadStyle">
            Download Our App Now!
          </h5>
          <p>
            Our App GPS Offert is available at Google PlayStore and AppStore. We
            recommend our users to Download our app for swift and much more
            better experience.
          </p>
          <h5 className="display-8 text-muted pt-3">Download Now !</h5>
          <div className="row">
            <div className="col-3">
              <Link className="display-13" to="/signin">
                <img alt="googlePlay" src={googlePlay} />
              </Link>
            </div>
            <div className="col-4">
              <Link className="display-13" to="/register">
                <img alt="appleStore" src={appleStore} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="display-6 downloadStyle pt-4 text-center">Find Place</h3>
        <p className="display-12 pb-4 text-muted text-center">
          Click below to find nearest store
        </p>
        <div className="bgFindPlace findBox pt-5 pb-4">
          <div className=" pt-5 pb-4">
            <div className="row px-5 pb-4">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="col pb-4">
                  <Form.Select required className="text-muted text-center py-2">
                    <option>Choose your location</option>
                    <option value="1">National Document</option>
                    <option value="2">Foreign Document</option>
                    <option value="3">......</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid location.
                  </Form.Control.Feedback>
                </div>
                <div className="row py-2">
                  <div className="col-6">
                    <Form.Select
                      required
                      className="text-muted text-center py-2"
                    >
                      <option>Category</option>
                      <option value="1">National Document</option>
                      <option value="2">Foreign Document</option>
                      <option value="3">......</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid category.
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-6">
                    <Form.Select
                      required
                      className="text-muted text-center py-2"
                    >
                      <option>Distance</option>
                      <option value="1">National Document</option>
                      <option value="2">Foreign Document</option>
                      <option value="3">......</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid distance.
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="pb-5">
                  <div className="pb-5">
                    <div className="text-center py-3 pb-5">
                      <Button
                        className="py-1 px-5 rounded-1 findStoreBtn text-white"
                        variant="light"
                        type="submit"
                      >
                        <b>Find Store</b>
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
