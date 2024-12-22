import React from "react";
import img1 from "../assets/Inside pics/shirtless-bodybuilder-posing-gym.jpg";
import img2 from "../assets/alexander-red-d3bYmnZ0ank-unsplash-removebg-preview.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid Hero">
            <div className="container gx-0">
              <div className="row gx-0">
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="Hero_col1">
                    <h1>
                      Get<span> Healthy </span>Body With the{" "}
                      <span>Perfect</span> Exercises
                    </h1>
                  </div>
                  <p>
                    <div className="para1">
                      Discover optimal well-being through tailored exercises.
                      Achieve a healthy body with our expert guidance,
                      personalized routines, and transformative fitness
                      solutions.
                    </div>
                  </p>
                  <br />
                  <div className="hero_btns">
                    <button className="btn1 btn0">Get Started</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Hero_col2">
                    {/* <img src={img1} alt=""  className='img-fluid'/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="container-fluid Hero Hero1">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div className="col-md-6">
                  <div className="Hero_col1">
                    <h1>
                      Build Your Body<span> Transform</span> Your Life
                    </h1>
                  </div>
                  <p>
                    <div className="para1">
                      Empower your journey to peak fitness. Build a stronger
                      body and transform your life with our expert guidance.
                      <br />
                    </div>
                  </p>
                  <br />
                  <div className="hero_btns">
                    <Link to="./AboutUs">
                      <button className="btn1 btn0">Get Started</button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Hero_col2">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-fluid Hero Hero2">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div className="col-md-6 order-md-2">
                  <div className="Hero_col1">
                    <h1>
                      Achieve<span> Your </span>Fitness <span>Dreams</span> With{" "}
                      <span>Us</span>
                    </h1>
                  </div>
                  <p>
                    <div className="para1">
                      Unlock your full potential through our expert-led
                      programs. Experience personalized training, comprehensive
                      support, and a community that drives you to succeed.
                    </div>
                  </p>
                  <br />
                  <div className="hero_btns">
                    <button className="btn1 btn0">Get Started</button>
                  </div>
                </div>

                <div className="col-md-6 order-md-1">
                  <div className="Hero2_col2">
                    <img src={img2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ********************************************** */}

      {/* ****************** */}
    </>
  );
};

export default Hero;
