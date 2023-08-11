// import { Outlet, Route, Routes } from 'react-router-dom'

// import NavBar from "./Routes/NavBar.jsx"
// import About from './Project Component/About.jsx'
// import Resume from './Project Component/Resume.jsx'
// import Contact from './Project Component/Contact.jsx'
// import Home from './Project Component/Home.jsx'

// const WowProject = () => {
//   return (
//     <div>

//     <Routes>
//         <Route path = "/" element = {<div><NavBar></NavBar><Outlet></Outlet></div>}>
//         <Route path = "home" element = {<Home></Home>}></Route>
//         <Route path = "about" element = {<About></About>}></Route>
//               <Route path = "resume" element = {<Resume></Resume>}></Route>
//               <Route path = "contact" element = {<Contact></Contact>}></Route>
//             </Route>
//     </Routes>

//     </div>
//   )
// }

// export default WowProject



import React, { useRef } from 'react';
import NavBar from "./Routes/NavBar.jsx";
import About from './Project Component/About.jsx';
import Resume from './Project Component/Resume.jsx';
import Contact from './Project Component/Contact.jsx';
import '../src/Project CSS/navbar.css'; // Import the external CSS file


const WowProject = () => {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavBar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToResume={() => scrollToSection(resumeRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={resumeRef}>
        <Resume />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default WowProject;

