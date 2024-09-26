import React from 'react';
import { Grid } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Grid container spacing={2} className='header-section'>
        <h1 className='heading'>
          We create award <br /> winning websites
        </h1>
        <div className='grid'>
          <Grid item xs={12} md={6}>

            <p className='subheading'>
              Based in San Francisco, we’re a digital <br /> products design & development studio <br /> that is passionate about creating high <br /> applicability of digital experiences.
            </p>
            {/* <button >Explore<img className='arrow' src="https://i.postimg.cc/sXkXf45y/up-right-arrow.png" alt="" /></button> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://i.postimg.cc/zfcFxfQy/Screenshot-2024-09-24-223145.png"
              alt=""
              className="image"
            />
          </Grid>
        </div>
      </Grid>

      <div className='secondary-section'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} className="icon-section">
            {/* This section is now empty */}
          </Grid>
          <Grid item xs={12} md={8} className="content-section">
            {/* This section is now empty */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
