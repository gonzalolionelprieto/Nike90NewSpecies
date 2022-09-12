import React from "react";
import img3 from "../img/03.png";
import img5 from "../img/05.png";
import img6 from "../img/06.png";
import img7 from "../img/07.png";

export default function Headers() {
  return (
    <div className=" header   header-fondo d-flex justify-content-center  ">
      <div className="container-fluid d-flex justify-content-center  flex-column ">
        <div className="row  d-flex justify-content-center t-5">
          <div className="col-2 d-none  d-lg-flex justify-content-center align-items-center">
            <img className="img3 p-0" src={img3} alt=" " />
          </div>

          <div className="col-12 col-lg-8  d-flex justify-content-center flex-column">
            <h1 className="text-center">NEW SPECIES</h1>
           
          </div>

          <div className="col-2 d-none  d-lg-flex justify-content-center align-items-center">
            <img className="img4 p-0" src={img5} alt=" " />
          </div>
        </div>
        <h3 className="text-center sub-titulo t-5"> NIKE AIR MAX 90 </h3>
        <div className="d-flex justify-content-center flex-column flex-wrap sub-header">
          <div className="row d-flex flex-column justify-content-center ">
            <div className="col-6 col-sm-3 d-flex justify-content-between flex-row mx-auto">
              <div className="col-1 mx-0 ">
                <img className="img7 " src={img7} alt=" " />
              </div>
              <div className="col-1 mx-0 ">
                <img className="img6 " src={img6} alt=" " />
              </div>
              <div className="col-1 mx-0 ">
                <img className="img7 " src={img7} alt=" " />
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <p className=" col-12 col-lg-5 text-center mt-5 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, asperiores aliquam quod culpa rem adipisci iste cum quas nostrum ipsa. Earum ut facilis impedit animi at? Dolores placeat fugiat itaque labore doloremque debitis cupiditate totam hic, neque earum ipsa a accusamus repudiandae nihil laboriosam aliquam ullam laborum mollitia sapiente laudantium!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
