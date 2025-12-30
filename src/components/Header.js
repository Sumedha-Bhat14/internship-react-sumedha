import React from "react";
import '../App.css'; 

function Header() {
  return (
    <div>
      <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary"></nav>
      <a class="navbar-brand" href="#">Navbar</a>
      <span class="navbar-toggler-icon"></span>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <li className="nav-item">
          <a class="nav-link" href="#"> NUTRITION </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#Home"> Home </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#About Me"> About Me </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#Pages"> Pages </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#Contact"> Contact </a>
        </li>
        </div>
      </header>
    </div>
  );
}

export default Header;
