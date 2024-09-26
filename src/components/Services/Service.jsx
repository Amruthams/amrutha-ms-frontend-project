import React from 'react'
import './Service.css'
import { Grid } from '@mui/material'


function Service() {
  return (
    <div className='service'>
      <div className='service-grid'>


        <div className='our-services'>  
          <div className='service1'>
            <li>Our services</li>
          </div>
          <div className='service2'>
            <p>We are a close-knit team of experts <br /> dedicated to crafting memorable and <br /><span> emotionally engaging websites, digital <br />experiences, and native apps.</span></p>
          </div>
        </div>

        <div class="brand-section">
       
        <div class="left-section">
            <h1>BRAND <br /> IDENTITY</h1>
            <p>We provide digital solutions such as Website <br /> Design, Mobile App Design, Landing <br />Page design, Illustration, Animation, etc <br />that increase company’s values</p>
            <div class="arrow-icon">
              <img className='arrow' src="https://i.postimg.cc/sXkXf45y/up-right-arrow.png" alt="" />
                
            </div>
        </div>

       
        <div class="right-section">
            <h1>UX/UI <br /> DESIGN</h1>
            <p>We provide digital solutions such as Website <br /> Design, Mobile App Design, Landing <br /> Page design, Illustration, Animation, etc <br />that increase company’s values</p>

            <div class="arrow-icons">
              
              <img className='arrow' src="https://i.postimg.cc/sXkXf45y/up-right-arrow.png" alt="" />
                
            </div>
        </div>

        <div class="last-section">
            <h1>WEBFLOW <br /> DEVELOPER</h1>
            <p>We provide digital solutions such as Website <br /> Design, Mobile App Design, Landing <br /> Page design, Illustration, Animation, etc <br />that increase company’s values</p>

            <div class="arrow-icons1">
              <img className='arrow' src="https://i.postimg.cc/sXkXf45y/up-right-arrow.png" alt="" />
                
            </div>
        </div>
    </div>
  
        
  
      </div>


    </div>
  )
}

export default Service
