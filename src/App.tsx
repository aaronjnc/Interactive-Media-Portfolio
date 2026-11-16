//import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import PhotoProject from "./Pages/PhotoProject";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import VideoProject from "./Pages/VideoProject";
import Reflection from "./Pages/Reflection";

function HomePage() {
  return (
    <>
    <main className="container">
      <section className='welcome'>
        <h1>Interactive Media</h1>
      </section>

      <div className="row">
        <div className="column">
          <div className="project">
            <a href="/photo-project"><img src={reactLogo} alt="Photo Series"></img></a>
            <h3>Photo Series</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
        <div className="column">
          <div className="project">
            <a href="/video-project"><img src={reactLogo} alt="Video Project"></img></a>
            <h3>Video Production</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
        <div className="column">
          <div className="project">
            <a href="/reflection"><img src={reactLogo} alt="Reflection"></img></a>
            <h3>Reflection</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>

    </main>
    </>
  );
}


function App() {
  return (
    <>
    <BrowserRouter>
      <header className="header">
        <div id="header">
          <div id="title">
            <h2>Aaron King</h2>
          </div>
          <div id="headerRight">
            <div className="topNav">
              <Link to="/" className="navLink">Home</Link>
              <div className="dropdown">
                <button className="dropbtn">Projects
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <Link to="/photo-project" className="dropLink">Photo Series</Link>
                  <Link to="/video-project" className="dropLink">Video Project</Link>
                  <Link to="/reflection" className="dropLink">Reflection</Link>
                </div>
              </div>
              <Link to="/about" className="navLink">About</Link>
              <Link to="/contact" className="navLink">Contact</Link>
            </div>
          </div>
                
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo-project" element={<PhotoProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/video-project" element={<VideoProject />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aaron King. All Rights Reserved.</p>
      </footer>
    </BrowserRouter>
    </>
  );
}

export default App;