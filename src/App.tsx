//import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import headshot from "./assets/Headshot.png";
import aesthetic from "./assets/Aesthetic.png";
import PhotoProject from "./Pages/PhotoProject";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import VideoProject from "./Pages/VideoProject";
import Reflection from "./Pages/Reflection";

function HomePage() {
  return (
    <>
    <main>
      <div className="page home-page">
        <header className="page-header">
          <span>Portfolio</span>
          <span>Based in Limerick, IE</span>
        </header>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Independent creative</p>
            <h1>Aaron<br></br>King</h1>
            <p className="role">Technical Experience Designer</p>
          </div>
          <figure className="portrait-wrap">
            <div className="portrait-accent" />
            <img src={headshot}/>
          </figure>
          <p className="hero-note">
            I build vivid visual worlds for people and brands with something meaningful to say.
          </p>
        </section>

        <section className="selected-section">
          <div className="section-heading">
            <h2>
              Featured Projects
            </h2>
          </div>
          <div className="project-list">
            <button className="project-card wide">
              <div className="project-image">
                <img src={aesthetic}/>
                <span className="view-pill">
                  View project
                </span>
              </div>
              <div className="project-meta">
                <h3>Photo Series</h3>
              </div>
            </button>
            <button className="project-card">
              <div className="project-image">
                <img src={aesthetic}/>
                <span className="view-pill">
                  View project
                </span>
              </div>
              <div className="project-meta">
                <h3>Video Project</h3>
              </div>
            </button>
            <button className="project-card film-card">
              <div className="project-image">
                <img src={aesthetic}/>
                <span className="view-pill">
                  View project
                </span>
              </div>
              <div className="project-meta">
                <h3>Video Report</h3>
              </div>
            </button>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}


function App() {
  return (
    <>
    <BrowserRouter>
      <aside className="sidebar">
        <nav aria-label="Portfolio navigation">
          <NavLink to="/" className="navLink">HOME</NavLink>
          <NavLink to="/photo-project" className="navLink">PHOTOGRAPHY</NavLink>
          <NavLink to="/video-project" className="navLink">VIDEOGRAPHY</NavLink>
          <NavLink to="/reflection" className="navLink">REFLECTION</NavLink>
          <NavLink to="/about" className="navLink">ABOUT</NavLink>
          <NavLink to="/contact" className="navLink">CONTACT</NavLink>
        </nav>
        <div className="sidebar-foot">
          <span>Available for work</span>
          <span className="availability-dot" />
        </div>
      </aside>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo-project" element={<PhotoProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/video-project" element={<VideoProject />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;