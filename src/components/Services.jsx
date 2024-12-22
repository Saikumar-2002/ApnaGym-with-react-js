import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import img1 from "../assets/services.png";

const Services = () => {
  return (
    <>
      <div className="container-fluid services">
        <div className="container">
          <div className="row gx-0">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services_col1">
                <h1 className="main_heading">
                  The best Programs We Offers For You
                </h1>
                <div className="services_main pt-3 pb-5">
                  <div className="form-check py-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      <h5 className="ps-3"> Personal Training</h5>
                    </label>
                  </div>
                  <p>
                    Elevate your fitness with personalized training. Tailored
                    workouts, expert guidance, and dedicated support for a
                    transformative journey to a healthier, fitter you.
                  </p>

                  {/*  8********************* */}
                  <div className="form-check py-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      <h5 className="ps-3">Expert Trainer</h5>
                    </label>
                  </div>
                  <p>
                    Empower your fitness journey with an expert trainer.
                    Tailored workouts, personalized guidance, and motivational
                    expertise to achieve your health and wellness goals
                    effectively and efficiently
                  </p>

                  {/*  8********************* */}

                  <div className="form-check py-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      <h5 className="ps-3">Flexile Time</h5>
                    </label>
                  </div>
                  <p>
                    Enjoy flexibility with your schedule through 'Flexile Time,'
                    a versatile approach to managing work and life, allowing for
                    adaptability and balance.
                  </p>
                  {/*  8********************* */}
                </div>
                <Link to="./detail">
                  <button className="btn1 btn0">Join Now</button>{" "}
                </Link>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
            >
              <div className="services_col2 pt-5 pt-md-0">
                <img src={img1} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
