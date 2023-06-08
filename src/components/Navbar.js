import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import  '../Img/LOGO.png';

const Navbar = () => {
    return (
       <div>
      
        <nav class="navbar navbar-expand-lg " id="nav-colour">
  <div class="container">
    <Link class="navbar-brand" href="#" id="nav-font"><img src={require("../Img/LOGO.png")}/></Link>
    <button class="navbar-toggler" type="button" id="toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" id="nav-font" href="#">Why DahNay</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#" id="nav-font">Case Study</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link " id="nav-font">FAQs</Link>
        </li>
      </ul>
      
        <button class="btn " type="submit" id="nav-font">Let Get Started</button>
      
    </div>
  </div>
</nav>
       </div>
  );
};

export default Navbar;
