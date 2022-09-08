import React from "react";
import img12 from "../img/12.png";
import img13 from "../img/13.png";
import img14 from "../img/14.png";
export default function Mask() {
  return (
    <div className="mask container-fluid">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col d-flex justify-content-center mb-5">
          <img className="col-12" src={img12} alt="" />
        </div>
        <div className="row m-150 d-flex  justify-content-center align-items-center">
          <div className="col-6 p-0">
            <div className="col">
              <h2 className="text-green">
                NO PETTING
              </h2>
            </div>

            <div className="col-8">
              <p className="text-green">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                facilis id recusandae eos dolor? Fuga aliquid repellendus error
                omnis eum temporibus, animi recusandae distinctio, expedita,
                accusantium amet vitae quibusdam vel veritatis aperiam! Expedita
                
              </p>
            </div>
          </div>
          <div className="col-6 p-0">
            <img className=" col-12" src={img13} alt="" />
          </div>
        </div>

        <div className="row m-150 d-flex  justify-content-center align-items-center">
        <div className="col-6 p-0">
            <img className=" col-12" src={img14} alt=" " />
          </div>  
          <div className="col-6">
            <div className=" col d-flex justify-content-center">
              <h2 className="col-7 text-green p-1">
               ANIMAL <br /> REFLEX
              </h2>
            </div>

            <div className="col d-flex justify-content-center">
              <p className="col-8 text-green p-1">
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
