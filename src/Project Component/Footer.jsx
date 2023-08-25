import React from 'react';
import '../Project CSS/page.css';


const Footer = () => {
  
  return (
    
    <footer className="footer-section">
      <div className="footer-content">
        <div className="social-icons">
          
          <a href="https://www.facebook.com/Pratik.Karanjit/" target='_blank'><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/pratik-karanjit/"  target='_blank'><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/pratik_karanjit/"  target='_blank'><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/Pratik-Karanjit"  target='_blank'><i className="fab fa-github"></i></a>
        </div>
        <p>Want to work together? <br /> Let's talk.</p>
        <button className='form-button'>Follow Me</button>
        <div className="contact-info">
          <p>www.pratikkaranjit@gmail.com</p>
          <p>9847346220</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
