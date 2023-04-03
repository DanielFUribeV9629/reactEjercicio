import React, { useState } from "react";
import support from "../../imgs/Support/support.png";
import sendEmail from "../../imgs/Support/sendEmail.png";
import FooterOp1 from "../../components/footers/FooterOp1";
import bgSupport from "../../imgs/Support/bgSupport.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Support = () => {
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
    <div className="">
      <div className="px-5 pt-5">
        <div className="row py-5 px-5">
          <div className="col-5 pt-5">
            <h1 className="display-4 downloadStyle pt-5 pb-3 px-4" style={{fontFamily: "Lovelace Text"}}>
              Providing Finest Customer Support
            </h1>
          </div>
          <div className="col-7 px-5">
            <div className="text-center">
              <img alt="logo" src={support} width="500px" />
            </div>
          </div>
        </div>
        <div className="row  bg-dark">a</div>
        <div className="row text-center">
          <h3 className="display-6 downloadStyle pt-5 pb-1 text-center">
            <strong>Reach out to us in any case of query.</strong>
          </h3>
          <p>Fill-in the form, and tell us About it ! We got you covered</p>
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
        <div className="row py-2 pb-5">
          <div className="col-3"></div>
          <div className="col-3">
            <Form.Select
              required
              className="text-dark text-center py-2 bg-warning bg-opacity-50"
            >
              <option>Type of Issue</option>
              <option value="1">Normal</option>
              <option value="2">Urgent</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid category.
            </Form.Control.Feedback>
          </div>
          <div className="col-3">
            <Form.Select
              required
              className="text-dark text-center py-2 bg-warning bg-opacity-50"
            >
              <option>Member</option>
              <option value="1">User</option>
              <option value="2">Bussiness Owner</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid distance.
            </Form.Control.Feedback>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      <div className="row bgSupportMessage px-5 py-5">
        {/*<img alt="logo" src={bgSupport} width="500px" />*/}
        <div className="col-6 px-5 py-5 text-center mt-5">
          <div className="pt-3 mx-4 px-3 pb-5 bgSendEmail">
            <div className="pt-5">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="pb-4 px-5" controlId="inputEmail">
                  <Form.Control
                    className="rounded-3 shadow"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="pb-4 px-5" controlId="inputName">
                  <Form.Control
                    className="rounded-3 shadow"
                    type="name"
                    placeholder="Name"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="pb-4 px-5" controlId="inputContact">
                  <Form.Control
                    className="rounded-3 shadow"
                    type="number"
                    placeholder="Contact Number"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid contact number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="pb-4 px-5" controlId="inputMessage">
                  <Form.Control
                    className="rounded-3 shadow"
                    style={{ height: "150px" }}
                    as="textarea"
                    placeholder="Your Message"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid message.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className="text-dark px-5 py-2 rounded-4 bg-warning"
                  type="submit"
                >
                  Send Now
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="text-center mt-5">
            <img alt="sendEmail" src={sendEmail} width="500px" />
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-5 pt-5 mt-4">
          <div className="py-3 px-4">
            <h3 className="display-6 downloadStyle text-center">
              <strong>Or Contact Us</strong>
            </h3>
          </div>
        </div>
        <div className="col-3 pt-5 pb-5">
          <div
            className="py-4 px-4 bg-warning bg-opacity-50 rounded-3 text-center"
            style={{ width: "80%" }}
          >
            <div className="row">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <h4>
                <strong>Email</strong>
              </h4>
            </div>
            <h6 className="text-muted text-center">
              iveloccecontact@gmail.com
            </h6>
          </div>
        </div>
        <div className="col-3 pt-5 pb-5">
          <div
            className="py-4 px-4 bg-warning bg-opacity-50 rounded-3 text-center"
            style={{ width: "80%" }}
          >
            <div className="row">
              <i class="fa fa-mobile" aria-hidden="true"></i>
              <h4>
                <strong>Phone</strong>
              </h4>
            </div>
            <h6 className="text-muted text-center">+57 12 354896231</h6>
          </div>
        </div>
        <div className="col-1 pt-5 pb-5"></div>
      </div>
      <FooterOp1 />
    </div>
  );
};

export default Support;
