import React from "react";
import "../CSS/team.css";
import"../Vector/Vector (1).png"
import"../Vector/clipart1140654 1.png"


const Team = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row-1">
            <p className="font"> Meet Our Vibrant Team</p>
          </div>
          <div className="row  align-items-center" id="space">
            <div className="col-12 col-lg-4 " id="space">
              <div class="card" id="bg3"><div class="card-body" id="bg3">
                <img
                  src={require("../Img/DSC08771 1.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div id="text">  <p id = "text-size-1">Murali </p><p id="bg-4">Founder and CEO</p><img className="img1" src={require("../Vector/Vector (1).png")}/><img className="img1" src={require("../Vector/clipart1140654 1.png")}/></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4" id="space">
              <div class="card" id="bg3"><div class="card-body" id="bg3">
                <img
                  src={require("../Img/WhatsApp Image 2023-04-26 at 7.32.23 PM 1 (1).png")}
                  class="card-img-top"
                  alt="..."
                />
                <div id="text"> <p id = "text-size-1">S.K.Sultan Basha </p><p id="bg-4">Vice President - International Business</p><img className="img1" src={require("../Vector/Vector (1).png")}/><img className="img1" src={require("../Vector/clipart1140654 1.png")}/></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4" id="space">
              {" "}
              <div class="card" id="bg3"><div class="card-body " id="bg3">
                <img
                  src={require("../Img/WhatsApp Image 2023-04-26 at 7.32.23 PM 1 (1).png")}
                  class="card-img-top"
                  alt="..."
                />
                <div id="text"><div >  <p id = "text-size-1">Ragendra Chowdary </p><p id="bg-4">General Manager</p><img className="img1" src={require("../Vector/Vector (1).png")}/><img className="img1" src={require("../Vector/clipart1140654 1.png")}/></div></div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
