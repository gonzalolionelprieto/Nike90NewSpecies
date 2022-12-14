import React from "react";
import img4 from "../img/04.png";

export default function Nav() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  fixed-top" >
        <div className="container-fluid ">
          <a className="navbar-brand ms-5 text-green" href="/#">
            <img src={img4} alt=" " style={{width:"50px"}}/>
          </a>
          <button
            style={{backgroundColor:"rgb(253, 224, 0)"}}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 " style={{color:"#d9ff6c"}}>
              <li className="nav-item mx-3 ">
                <a className="text-green nav-link " aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="text-green nav-link " href="/#">
                  Features
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="text-green nav-link  btn-green p-0" href="/#">
                  Pricing
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
