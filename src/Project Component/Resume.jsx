import React from 'react';
import '../Project CSS/page.css'; // Make sure to import your CSS file
// import resumeImg from '../path/to/your/resume/image.jpg'; // Update the path and filename accordingly

const Resume = () => {
  return (
    <section id="resume" className="resume-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-3 bg-light">
            <div className="resume-left-section">
              <div className="resume-photo">
                {/* <img src={resumeImg} alt="Resume" className="img-fluid rounded-circle" /> */}
              </div>
              <div className="resume-skills">
                <div className="circular-field">
                  <div className="progress-circle">
                    <span className="progress-percentage">85%</span>
                  </div>
                  <p>ReactJS</p>
                </div>
                {/* Add more circular fields */}
              </div>
              <div className="resume-download">
                <a href="/path-to-your-cv.pdf" className="btn btn-primary">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
