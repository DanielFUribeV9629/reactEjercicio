import React, { useState } from "react";
import logo from "../../logo.svg";
import FooterOp1 from "../../components/footers/FooterOp1";
import faqMain from "../../imgs/FAQ/faqMain.png";
import Button from "react-bootstrap/Button";
import googlePlay from "../../imgs/sm.png";
import appleStore from "../../imgs/apple/sm.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Faq = () => {
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
    <div>
      <div className="px-5 pt-5">
        <div className="row py-5 px-5">
          <div className="col-5 pt-5">
            <div className="" style={{ width: "80%" }}>
              <h1
                className="display-2 downloadStyle pt-5 pb-3"
                style={{
                  fontFamily: "Lovelace Text",
                  color: "#106358",
                  filter: "blur(0.7px)",
                }}
              >
                We are here to Help You !
              </h1>
            </div>
            <div className="pb-5" style={{ fontSize: "150%" }}>
              Looking for something? <br></br>
              Search here, we have got you covered!
            </div>

            <InputGroup className="mb-3">
              <Form.Control
                className="rounded-3"
                placeholder="Search here"
                aria-label="Search here"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1" className="rounded-3">
                <i class="fa fa-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>
      
              
            
          </div>
          <div className="col-7 pt-5 mt-3 px-5">
            <div className="text-center">
              <img alt="logo" src={faqMain} style={{width: "100%"}} />
            </div>
          </div>
        </div>
        <div className="row pt-2 pb-5">
          <div className="pb-4">
            <h3 className="display-6 downloadStyle pt-5 pb-3 text-center">
              <strong>Frequently Asked Questions</strong>
            </h3>
          </div>
          <div className="col-6 bg-white" style={{ height: "45px" }}></div>
          <div
            className="col-5 bgAboutUsTwo"
            style={{
              height: "45px",
              outline: "none",
              border: "none !important",
            }}
          ></div>
          <div className="col-6">
            <div className="row">
              <div className="col-2 bg-white px-5"></div>
              <div className="col-10 ">
                <div>
                  <div className="row bgAboutUs py-3 px-4">
                    <div className="px-4">
                      <div className="col-10 pt-4 px-3">
                        <h5 className="display-12 pb-2">
                          {" "}
                          <strong> What plan works Best ? </strong>
                        </h5>
                        <p>
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
          </div>

          <div className="col-5 pt-3 px-2 bgAboutUsTwo">
            <div className="row">
              <div className="row px-4">
                <h5 className="px-5 display-12 pb-2 text-white">
                  {" "}
                  <strong> How much Distance Gps offer covers? </strong>
                </h5>
                <p className="text-white px-5">
                  elit odio amet, id ultrices porta volutpat tincidunt luctus
                  Morbi non. odio faucibus nec lacus, Cras ex elementum amet,
                  sit adipiscing odio ex diam sapien Sed
                </p>
              </div>
            </div>
          </div>
          <div className="col-1 bg-white px-5"></div>
        </div>

        <div className="row pt-4 pb-5">
          <div className="col-6 bg-white" style={{ height: "45px" }}></div>
          <div className="col-5 bgAboutUsTwo" style={{ height: "45px" }}></div>
          <div className="col-6">
            <div className="row">
              <div className="col-2 bg-white px-5"></div>
              <div className="col-10 ">
                <div>
                  <div className="row bgAboutUs py-3 px-4">
                    <div className="px-4">
                      <div className="col-10 pt-4 px-3">
                        <h5 className="display-12 pb-2">
                          {" "}
                          <strong> How to register ? </strong>
                        </h5>
                        <p>
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
          </div>

          <div className="col-5 pt-3 px-2 bgAboutUsTwo">
            <div className="row">
              <div className="row px-4">
                <h5 className="px-5 display-12 pb-2 text-white">
                  {" "}
                  <strong> How do i get promoted? </strong>
                </h5>
                <p className="text-white px-5">
                  elit odio amet, id ultrices porta volutpat tincidunt luctus
                  Morbi non. odio faucibus nec lacus, Cras ex elementum amet,
                  sit adipiscing odio ex diam sapien Sed
                </p>
              </div>
            </div>
          </div>
          <div className="col-1 bg-white px-5"></div>
        </div>

        <div className="row pt-4 pb-5">
          <div className="col-6 bg-white" style={{ height: "45px" }}></div>
          <div className="col-5 bgAboutUsTwo" style={{ height: "45px" }}></div>
          <div className="col-6">
            <div className="row">
              <div className="col-2 bg-white px-5"></div>
              <div className="col-10 ">
                <div>
                  <div className="row bgAboutUs py-3 px-4">
                    <div className="px-4">
                      <div className="col-10 pt-4 px-3">
                        <h5 className="display-12 pb-2">
                          {" "}
                          <strong> How does dashboard work ? </strong>
                        </h5>
                        <p>
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
          </div>

          <div className="col-5 pt-3 px-2 bgAboutUsTwo">
            <div className="row">
              <div className="row px-4">
                <h5 className="px-5 display-12 pb-2 text-white">
                  {" "}
                  <strong> Does helpline works 24/7? </strong>
                </h5>
                <p className="text-white px-5">
                  elit odio amet, id ultrices porta volutpat tincidunt luctus
                  Morbi non. odio faucibus nec lacus, Cras ex elementum amet,
                  sit adipiscing odio ex diam sapien Sed
                </p>
              </div>
            </div>
          </div>
          <div className="col-1 bg-white px-5"></div>
        </div>
      </div>
      <FooterOp1 />
    </div>
  );
};

export default Faq;
