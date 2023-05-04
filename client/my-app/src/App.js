import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './templates/home/home';
import About from './templates/about/about';
import Projects from './templates/projects/projects';
import Events from './templates/events/events';
import Donation from './templates/donation/donation';
import Contact from './templates/contact/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
