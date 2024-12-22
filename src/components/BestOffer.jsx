import React from "react";
import img1 from "../assets/goal1.png";
import img2 from "../assets/goal2.png";
import img3 from "../assets/goal3.png";
import img4 from "../assets/goal4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BestOffer = () => {
  return (
    <>
      <div className="container-fluid BestOffers ">
        <div className="container">
          <div className="row gx-0 py-4 align-items-center">
            <div className="col-md-7">
              <h1 className="main_heading pe-md-5 me-md-5">
                The best Programs We Offers For You
              </h1>
            </div>
            <div className="col-md-5">
              <p>
                Stop searching, start thriving! We've handpicked programs just
                for you. Unlock your potential, from fitness feats to career
                climbs. Let's make magic happen!
              </p>
            </div>
          </div>
          {/************** */}
          <div className="row gx-0">
            <div
              className="col-md-3"
              data-aos="fade-up"
              
              data-aos-duration="1000"
            >
              <div className="bestoffer_col1 py-3">
                <img src={img1} alt="" className="img-fluid pb-3" />
                <h4>Strength Training</h4>
                <p>
                  Unlock your potential with a dynamic strength training program
                  for lasting fitness gains.
                </p>
                <button>
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                </button>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos="fade-up"
              
              data-aos-duration="1200"
            >
              <div className="bestoffer_col1">
                <img src={img2} alt="" className="img-fluid pb-4" />
                <h4>CrossFit</h4>
                <p>
                  Discover serenity and flexibility through this foundational of
                  Cross Fit .
                </p>
                <button>
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                </button>
              </div>
            </div>

            <div
              className="col-md-3"
              data-aos="fade-up"
              
              data-aos-duration="1400"
            >
              <div className="bestoffer_col1">
                <img src={img3} alt="" className="img-fluid pb-3" />
                <h4>Body Building</h4>
                <p>
                  Transform your physique with a comprehensive bodybuilding
                  regimen strength, size, and definitio
                </p>
                <button>
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                </button>
              </div>
            </div>

            <div
              className="col-md-3"
              data-aos="fade-up"
              
              data-aos-duration="1600"
            >
              <div className="bestoffer_col1">
                <img src={img4} alt="" className="img-fluid pb-3" />
                <h4>Weight Loss</h4>
                <p>
                  Achieve sustainable weight loss through a balanced approach,
                  combining nutrition, and mindfulness.
                </p>
                <button>
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOffer;
