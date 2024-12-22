import React, { useState } from "react";
import img4 from "../assets/main-image3.png";

import img7 from "../assets/Inside pics/ai-generated-8212645_1280.jpg";
import img8 from "../assets/Inside pics/alexander-red-d3bYmnZ0ank-unsplash.jpg";
import img9 from "../assets/Inside pics/edgar-chaparro-sHfo3WOgGTU-unsplash (1).jpg";
import img10 from "../assets/Inside pics/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg";
import img11 from "../assets/Inside pics/muscular-guy-with-dumbbell.jpg";
import img12 from "../assets/Inside pics/muscular-man-looking-dumbbell.jpg";
import img13 from "../assets/Inside pics/scott-webb-xwMlVSqP20U-unsplash.jpg";
import img14 from "../assets/Inside pics/shirtless-bodybuilder-posing-gym.jpg";
import img15 from "../assets/Inside pics/spencer-davis-0ShTs8iPY28-unsplash.jpg";
import img16 from "../assets/Inside pics/call-8033050_1280.png"

const Detail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    gender: "",
    age: "",
    email: "",
    phoneNumber: "",
    goal: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.age || isNaN(formData.age))
      errors.age = "Valid age is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required";
    if (!formData.goal) errors.goal = "Goal is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbywRqHFyel--Oboxt9txTrSR_aQw_SzfGt3nB2DbYCl5WGjX5igpOICLHUPRU1hS-uT/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );
      if (response) {
        setFormSubmitted(true);
        resetForm();
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      city: "",
      gender: "",
      age: "",
      email: "",
      phoneNumber: "",
      goal: "",
    });
    setFormErrors({});
  };

  return (
    <div className="container-fluid about_us align-items-center">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div
            className="col-md-6 "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="fitness_col4">
              <h1 className="main_heading">Join Now</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.fullName && (
                    <small className="form-text text-danger">
                      {formErrors.fullName}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.city && (
                    <small className="form-text text-danger">
                      {formErrors.city}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.gender && (
                    <small className="form-text text-danger">
                      {formErrors.gender}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.age && (
                    <small className="form-text text-danger">
                      {formErrors.age}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.email && (
                    <small className="form-text text-danger">
                      {formErrors.email}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.phoneNumber && (
                    <small className="form-text text-danger">
                      {formErrors.phoneNumber}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="goal">Goal</label>
                  <textarea
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                  {formErrors.goal && (
                    <small className="form-text text-danger">
                      {formErrors.goal}
                    </small>
                  )}
                </div>
                <br />
                <button type="submit" className="btn1 btn0 btn-primary">
                  Submit
                </button>
              </form>
              {formSubmitted && (
                <h1 className="text-align-center">
                  <br />
                  <b>Thanks for registering with us!</b>
                </h1>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="fitness_colform3 
            "
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <img src={img16} alt="" className="img-fluid" style={{"width":"500px","height":"auto"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
