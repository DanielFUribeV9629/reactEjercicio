import React from "react";
import logoGPS from "../../imgs/logoGPS.png";
import { useLocation, Link } from "react-router-dom";
import footer1 from "../../imgs/Footer/footer1.png";
import insta from "../../imgs/Footer/insta.png";
import face from "../../imgs/Footer/face.png";
import linkedin from "../../imgs/Footer/linki.png";
import twitter from "../../imgs/Footer/twit.png";
import googlePlay from "../../imgs/sm.png";
import appleStore from "../../imgs/apple/sm.png";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";
import clientRegistryServ from "../../services/clientRegistryServ/clientRegistryServ";

const FooterOp2 = () => {
  const { pathname } = useLocation();

  if (pathname === "/signIn" || pathname === "/register" || pathname === "/faq" || pathname === "/support") {
    return <></>;
  }

  return (
    <div className="">
      <CDBFooter className="shadow footerStyle">
        <CDBBox
          display="flex"
          flex="column"
          className="row py-5"
          style={{ width: "100%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="row">
            <CDBBox className="col-4 text-center">
              <div className="pt-4">
                <div className=" pt-4">
                  <img alt="logo" src={logoGPS} width="55%" />
                </div>
              </div>
              <p className="mx-3 my-3 text-center">Join Us</p>
              <CDBBox
                display="flex"
                justifyContent="center"
                style={{ width: "100%" }}
              >
                <div flat color="" className="p-2">
                  <Link className="display-13" to="/home">
                    <img alt="" src={insta} width="100%" />
                  </Link>
                </div>
                <div flat color="" className="p-2">
                  <Link className="display-13" to="/home">
                    <img alt="" src={face} width="100%" />
                  </Link>
                </div>
                <div flat color="" className="p-2">
                  <Link className="display-13" to="/home">
                    <img alt="" src={linkedin} width="100%" />
                  </Link>
                </div>
                <div flat color="" className="p-2">
                  <Link className="display-13" to="/faq">
                    <img alt="" src={twitter} width="100%" />
                  </Link>
                </div>

                {/*
                <CDBBtn flat color="dark" className="p-2 mx-2">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="linkedin" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2 mx-2">
                  <CDBIcon fab icon="twitter" />
  </CDBBtn>*/}
              </CDBBox>
            </CDBBox>

            <CDBBox className="col-4 px-5">
              <div className="px-3">
                <p className="h5 mt-5 mb-3" style={{ fontWeight: "600" }}>
                  <b>Contact Us</b>
                </p>
                <p style={{ width: "70%" }}>
                  For any additional information, email us at:
                  gpsoffert@gmail.com
                </p>
                <p className="h5 mt-5 mb-3" style={{ fontWeight: "600" }}>
                  <b>Help</b>
                </p>
                <CDBBox
                  flex="column"
                  display="flex"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink href="/">Terms & Conditions</CDBFooterLink>
                  <CDBFooterLink className="pt-1" href="/">
                    Privacy Policy
                  </CDBFooterLink>
                  <CDBFooterLink className="pt-1" href="/">
                    Plans & Promotions
                  </CDBFooterLink>
                  <CDBFooterLink className="pt-1" href="/">
                    Locations
                  </CDBFooterLink>
                </CDBBox>
              </div>
            </CDBBox>

            <CDBBox className="col-4 text-center">
              <div className="row pt-5 mt-4">
                <img alt="logo" src={footer1} width="100%" />
              </div>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
      <div className="copyRight text-center text-white">
        <small>&copy; OfferToYou, 2022. All rights reserved.</small>
      </div>
    </div>
  );
};

export default FooterOp2;
