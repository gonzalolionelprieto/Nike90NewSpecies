import React from "react";
import img0 from "/proyectos react/sneakers nike 90 new spices/nike/src/img/08.png";
export default function Become() {
  return (
    <div className="become container ">
      <div className="row d-flex">
        <div className="col-12 col-lg-6  d-flex flex-column justify-content-center align-items-center">
          <div className="col-10  ">
            <div className="col">
              <h2 className="text-green">TRADITION  - <br /> REVIEW OF THE REVOLUTION</h2>
            </div>
            
            
            <div className="col">
              <p className="text-green">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt inventore explicabo id aperiam aspernatur neque error
                excepturi illo cupiditate aliquid!
              </p>
            </div>
            <div className="col">
              <p className="text-green light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt inventore explicabo id aperiam aspernatur neque error
                excepturi illo cupiditate aliquid!
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img className="col-10 col-lg-12  img0" src={img0} alt=" " />
        </div>
      </div>
    </div>
  );
}
