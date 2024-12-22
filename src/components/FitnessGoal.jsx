import React from 'react'

import img1 from "../assets/partner1.png"
import img2 from "../assets/partner2.png"
import img3 from "../assets/partner3.png"

const FitnessGoal = () => {
  return (
    <>
     <div className="container-fluid Fitness_Goal align-items-center">
     <div className='container'>
     <div className='row gx-0'>
        <div className='col-md-5'>
            <div className='fitness_col1'>
               <h1> 50 + More</h1>
               <p>
                Trusted Companies Partner
               </p>
            </div>
        </div>
        <div className='col-md-7'>
            <div className='fitness_col2'>
                <img src={img1} alt="" className='img-fluid px-3'/>
                <img src={img2} alt="" className='img-fluid px-3'/>
                <img src={img3} alt="" className='img-fluid px-3'/>
            </div>
        </div>
     </div>

     </div>

     </div>
      
    </>
  )
}

export default FitnessGoal
