import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import FooterOp1 from "./components/footers/FooterOp1";
import FooterOp2 from "./components/footers/FooterOp2";
import ClientRegistry from "./components/clientRegistry/ClientRegistry";
import Header from "./components/header/Header";
import Faq from "./components/faq/Faq";
import Support from "./components/support/Support";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";

const App = () => {
  return (    
    <Router>
      <div>
        <Header className="mb-5" />        
        <br></br>
        <br></br>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/signIn' element={<SignIn />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/support' element={<Support />} />
          <Route exact path='/clientRegistry' element={<ClientRegistry />} />
          <Route path="*" element={<FooterOp1/>}/>
        </Routes>
        <FooterOp2 />
      </div>
    </Router>
  );
};

export default App;
