import React from "react";
import tick from "../assets/tick.png";

const BestPlan = () => {
  return (
    <>
      <div className="container-fluid BestPlan">
        <h1 className="main_heading">Choose the Best Plan</h1>
        <div className="container pt-5">
          <div className="row gx-0 align-items-center">
            <div
              className="col-md-4"
              ata-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="bestplan_col1">
                <h5> Montly Plan</h5>
                <h1 className="pt-4">
                  ₹1500 <span>/Per Month</span>
                </h1>
                <div className="bestplan_detail py-3">
                  <p>
                    <img src={tick} alt="" /> Strength Training
                  </p>
                  <p>
                    <img src={tick} alt="" /> CrossFit
                  </p>
                  <p>
                    <img src={tick} alt="" /> Body Building
                  </p>
                  <p>
                    <img src={tick} alt="" /> Weight Loss
                  </p>
                  <p>
                    <img src={tick} alt="" /> Flexile Time
                  </p>
                  <p>
                    <img src={tick} alt="" /> Expert Trainer
                  </p>
                </div>
                <button className="btn3">Choose Plan</button>
              </div>
            </div>
            <div
              className="col-md-4"
              ata-aos="fade-down"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <div className="bestplan_col1 bestplan_col2">
                <h3 className="BestPlan_h3">Most Popular</h3>
                <h5> Quaterly Plan</h5>
                <h1 className="pt-4">
                  ₹1200 <span>/Per Month</span>
                </h1>
                <div className="bestplan_detail py-3">
                  <p>
                    <img src={tick} alt="" /> Strength Training
                  </p>
                  <p>
                    <img src={tick} alt="" /> CrossFit
                  </p>
                  <p>
                    <img src={tick} alt="" /> Body Building
                  </p>
                  <p>
                    <img src={tick} alt="" /> Weight Loss
                  </p>
                  <p>
                    <img src={tick} alt="" /> Flexile Time
                  </p>
                  <p>
                    <img src={tick} alt="" /> Expert Trainer
                  </p>
                </div>
                <button className="btn4">Choose Plan</button>
              </div>
            </div>
            <div
              className="col-md-4"
              ata-aos="fade-down"
              data-aos-duration="1800"
            >
              <div className="bestplan_col1">
                <h5> Yearly Plan</h5>
                <h1 className="pt-4">
                  ₹1000 <span>/ Per Month</span>
                </h1>
                <div className="bestplan_detail py-3">
                  <p>
                    <img src={tick} alt="" /> Strength Training
                  </p>
                  <p>
                    <img src={tick} alt="" /> CrossFit
                  </p>
                  <p>
                    <img src={tick} alt="" /> Body Building
                  </p>
                  <p>
                    <img src={tick} alt="" /> Weight Loss
                  </p>
                  <p>
                    <img src={tick} alt="" /> Flexile Time
                  </p>
                  <p>
                    <img src={tick} alt="" /> Expert Trainer
                  </p>
                </div>

                <button className="btn3">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPlan;
