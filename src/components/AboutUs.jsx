import React from "react";

import img1 from "../assets/partner1.png";
import img2 from "../assets/partner2.png";
import img3 from "../assets/partner3.png";
import img4 from "../assets/fitness1.jpeg";
import img5 from "../assets/builder1.jpg";
import img6 from "../assets/builder2.jpg";

import img7 from "../assets/Inside pics/ai-generated-8212645_1280.jpg";
import img8 from "../assets/Inside pics/alexander-red-d3bYmnZ0ank-unsplash.jpg";
import img9 from "../assets/Inside pics/edgar-chaparro-sHfo3WOgGTU-unsplash (1).jpg";
import img10 from "../assets/Inside pics/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg";
import img11 from "../assets/Inside pics/muscular-guy-with-dumbbell.jpg";
import img12 from "../assets/Inside pics/muscular-man-looking-dumbbell.jpg";
import img13 from "../assets/Inside pics/scott-webb-xwMlVSqP20U-unsplash.jpg";
import img14 from "../assets/Inside pics/shirtless-bodybuilder-posing-gym.jpg";
import img15 from "../assets/Inside pics/spencer-davis-0ShTs8iPY28-unsplash.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,Pagination } from 'swiper/modules';

const AboutUs = () => {
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
      ></Swiper>
      <div className="container-fluid about_us align-items-center ">
        <div className="container">
          <div className="row gx-0 align-items-center pl-md-4">
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
            
              <div className="imgbuilder fitness_col3 fitness_colform3">

              
             
                <img src={img9} alt="" className="img-fluid smaller-image" />
                
                
              </div>
              
             
            </div>
            
            <div
              className="col-md-7  text-align-center pr-10 "
              data-aos="fade-left"
              data-aos-duration="1400"
            >
              <div className="fitness_col4 text-align-center">
                <h1 className="main_heading text-align-center">About Us</h1>
                <div className="pt-3 pb-4 text-justify pr-4">
                  <p>
                    <strong> Apna Gym </strong> is ISO certified Unisex Gym
                    in India
                    <br />
                    Ditch the excuses, grab your motivation backpack! "Get Ready
                    To Reach Your Fitness Goals" isn't just a title, it's a
                    battle cry. This guide is your personal trainer,
                    cheerleader, and goal-crushing buddy rolled into one. We'll
                    break down your aspirations into bite-sized.
                  </p>

                  <p>
                    Get ready to conquer your doubts, rewrite your limits, and
                    finally claim the healthier, happier you!
                    At Apna Gym, our mission is to inspire a healthier lifestyle by providing a fitness experience like no other. Whether you're a beginner or a seasoned athlete, we are here to help you every step of the way
                  </p>
                </div>
                <button className="btn1 btn0">Free Trial Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
