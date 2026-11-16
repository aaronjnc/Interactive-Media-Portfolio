//import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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
      <div className="sidenav">
        <h2>Aaron King</h2>
        <nav>
        <NavLink to="/" className="navLink">Home</NavLink>
        <NavLink to="/photo-project" className="navLink">Photo Project</NavLink>
        <NavLink to="/video-project" className="navLink">Video Project</NavLink>
        <NavLink to="/reflection" className="navLink">Reflection</NavLink>
        <NavLink to="/about" className="navLink">About</NavLink>
        <NavLink to="/contact" className="navLink">Contact</NavLink>
        </nav>
      </div>

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