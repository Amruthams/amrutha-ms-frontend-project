import React from 'react'
import './Test.css'

function Test() {
  return (
    <div className='testimonial'>
      <div className='testimonial-grid'>


        <div className='test'>
          <div className='testleft'>
            <li>Testimonials</li>
          </div>
          <div className='testright'>
            <p>A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!</p>

            <div className='profile'>
              <div className='img'><img src="https://i.postimg.cc/J0mqZxjk/imgggg.png" alt="" /></div>
              <div className='paragraph'>
                <h4>Kathryn Murphy</h4>
                <p>Senior Marketing, Spotify</p>
              </div>


            </div>

            <div className='circle'>
              <div class="circle-button">
                <span class="left-arrow">←</span>
              </div>
              <div class="circle-button">
                <span class="right-arrow">→</span>
              </div>
            </div>
          </div>






        </div>


      </div>

    </div>
  )
}

export default Test
