import React from "react";
import img12 from "../img/12.png";
import img13 from "../img/13.png";
import img14 from "../img/14.png";
export default function Mask() {
  return (
    <div className="mask container-fluid">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col d-flex justify-content-center mb-5">
          <div class="card ">
            <img src={img12} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h2 class="card-title text-green text-start p-3">BEYOND <br />  NATURE</h2>
             
             
            </div>
          </div>
        </div>
        <div className="row m-150 d-flex  justify-content-center align-items-center">
          <div className="col-12 col-sm-6 p-0">
            <div className="col">
              <h2 className="col-12 text-green p-1">NO PETTING</h2>
            </div>

            <div className="col-10">
              <p className="text-green">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                facilis id recusandae eos dolor? Fuga aliquid repellendus error
                omnis eum temporibus, animi recusandae distinctio, expedita,
                accusantium amet vitae quibusdam vel veritatis aperiam! Expedita
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 p-0">
            <img className=" col-12" src={img13} alt="" />
          </div>
        </div>

        <div className="row m-150 d-flex  justify-content-center align-items-center">
          <div className="col-12 col-sm-6 p-0">
            <img className=" col-12" src={img14} alt=" " />
          </div>
          <div className="col-12 col-sm-6">
            <div className=" col d-flex justify-content-center">
              <h2 className="col-12 text-green p-1">
                ANIMAL <br /> REFLEX
              </h2>
            </div>

            <div className="col d-flex justify-content-center">
              <p className="col-10 text-green p-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                facilis id recusandae eos dolor? Fuga aliquid repellendus error
                omnis eum temporibus, animi recusandae distinctio, expedita,
                accusantium amet vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
