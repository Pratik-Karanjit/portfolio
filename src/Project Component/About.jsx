import React, { useEffect, useState } from 'react';
import '../Project CSS/page.css'; // Import the external CSS file
import fbicon from '../Project CSS/mee.png';
import logoicon from '../Project CSS/dev.png';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);

    setTimeout(() => {
      setAnimate(false);
    }, 2500);
  }, []);

  return (
    <div className='hero'>
      <img src={logoicon} className='logo' alt='logo' /> {/* Logo image */}
      <div className='description'>
        <div className={`content ${animate ? 'animated' : ''}`}>
          <div className='text'>
          <h1>Hi, <br /> <i>I'm Pratik</i></h1>
          <h3>Based in Kathmandu, I am pursuing my Bachelors Degree<br></br> at Islington College.
          My skills lie in developing websites <br></br>and I have expertise in the MERN Stack. 
          Join me on my <br></br>journey as I create innovative web solutions.</h3>
          </div>
          <div className='images'>
            <img src={fbicon} className='me' alt='me' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
