import React from "react";
import "../CSS/home1.css";
import ProductCard from "../ProductCard";
import '../Img/solar-power-station-solar-farm-with-electricity-i-2023-04-07-16-19-40-utc 1.png'
import NumberCard from "../NumberCard";
import ImageCard1 from "../ImageCard1";
import ImageCard2 from "../ImageCard2";
import Team from "./Team";
import Background from "./Background";
import FAQ from "./FAQ";


const Home1 = () => {
  return (
    <div >
    <div className="container" id="background">
      <div className="row container align-items-center">
        <div className="col-lg-6 ">
          <br></br>
          <div className="row" id="font">
            End-To-End Personalised Logistics Solutions
          </div>
          <div className="row" id="font-1">
            Innovative solutions engineered to your needs
          </div>
          <div className="row"></div>
        </div>

        <div className="col-lg-6">
          <br></br>
          <div className="card">
            <div className="card-body">
              <section>Usual Routes Unusual Rates - Book Now</section>
              <form>
                <div className="row">
                  {" "}
                  <div className="col-12 col-lg-6 ">
                    <label className=" col-12">Origin of Shipment</label>
                    <input
                      className=" col-12"
                      type="text"
                      placeholder="Oringin"
                    />{" "}
                  </div>
                  <div className="col-12 col-lg-6 ">
                    <label className=" col-12">Destination of Shipment</label>
                    <input
                      className=" col-12"
                      type="text"
                      placeholder="Destination"
                    />{" "}
                  </div>
                </div>

                <div className="row">
                  {" "}
                  <div className="col-12  ">
                    <label className=" col-12">Origin of Shipment</label>
                    <input
                      className=" col-12"
                      type="text"
                      placeholder="1/06/2023"
                    />{" "}
                  </div>
                </div>

                <div className="row">
                <div className="col-12 col-lg-5">
                    <div>
                    <label class="form-label">Container</label>
                    <select class="form-select">
                      <option>20' Standard Container</option>
                      <option>80' Standard Container</option>
                      <option>20' Normal Container</option>
                    </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div>
                      <label className=" col-12">Quantity</label>
                      <select class="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div>
                      <label className=" col-12">Weight (kg )</label>
                      <select class="form-select">
                        <option>20</option>
                        <option>80</option>
                        <option>20</option>
                      </select>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <button className="btn col-12">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>




        <div className="row" id="font-4">
            We specialise in
          </div>

           <div className="row">
            <div className="col-12 col-lg-4 "><ProductCard img1 = {require("../Img/solar-power-station-solar-farm-with-electricity-i-2023-04-07-16-19-40-utc 1.png")} 
            title1="PV Modules" title2="efficient solar panels and components logistics services from production to final services."   /></div>
            <div className="col-12 col-lg-4"><ProductCard img1 = {require("../Img/inverters-to-transform-direct-current-prodused-by-2023-04-10-19-58-16-utc 1.png")} 
            title1="Inverters" title2="well-planned inverter, semiconductor, batteries and solar logistics services"/></div>
            <div className="col-12 col-lg-4"><ProductCard img1 = {require("../Img/solar-powered-street-light-pole-san-jose-califor-2021-08-30-08-09-59-utc 1.png")} 
            title1="Solar Products" title2="cost effective solar bags, solar clothes, solar street lights and various solar products shipping services"/></div>
           </div>



      </div>
     

    </div>
    <div className="container-fluid" id="background-1">
      <div className="container align-self-center" id="align">
        <div className="col-md ">
        <div className="row justify-content-center "><div className="col-12 col-xl-9" align="center"><p id="text-spacing" >we handle 29000 tonnes of solar modules in 2 years. we can ship yours too. That to at competitive rates. </p></div>
        
        <div className=" col-6 col-xl-3  " align="center" ><button className="btn" id="btn">Get Quote Now</button></div></div>
        </div>
      </div>
      
    </div>

    <div className="container-fluid" id="bg-2">
       <div className="container" id="spacing-1">
       <div className="row"id="font-4">Why Choose Us?</div>
       <div className="row"id="spacing">
        <div className="col-12 col-lg-4"><NumberCard title="01" title1="Dedicated Global Team" title2="A vibrant team that knows the Renawable industry in and out"/></div>
        <div className="col-12 col-lg-4"><NumberCard title="02" title1="Extensive carrier network" title2="With a presence in 35+ contries, our network is strongly connected"/></div>
        <div className="col-12 col-lg-4"><NumberCard title="03" title1="Contract with major shipping lines" title2="Previously liked contract rates with almost all the shipping lines "/></div>
       </div>
       <div className="row" id="spacing">
       <div className="col-12 col-lg-4"><NumberCard title="04" title1="Seamless supply chain" title2="Very strong agent network throughout USA, China and Europe"/></div>
       <div className="col-12 col-lg-4"><NumberCard title="05" title1="Our product clientele" title2="Trusted by the leading solar panel manufacturer in Asia"/></div>
       <div className="col-12 col-lg-4 btn btn-primary" id="btn-1" >Downloadable PDF</div>
       </div>
     </div> 
    </div>
     

     <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6"><ImageCard1 img1={require("../Img/Rectangle 9.png")} title="Case Study" title1="25000+ tonnesnshipped in 2 years" title2="Delivering a cost-effective Logistics Solution for India's Largest Solar Panel Manufacturer"/></div>
          <div className="col-12 col-lg-6"><ImageCard2 img1={require("../Img/Rectangle 8.png")} title="Blog" title1="Choosing the Right Freight Forwarder" title2="A tried-and-trip for first-time Renewable energy exporters and import"/></div>
        </div>
      </div>
     </div>


    <Team/>
    <Background/>
    <div className="container"><FAQ/></div>
    





  </div>
  );
};

export default Home1;
