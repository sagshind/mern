import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from './templates/home/home';
import About from './templates/about/about';
import Projects from './templates/projects/projects';
import Events from './templates/events/events';
import Donation from './templates/donation/donation';
import Contact from './templates/contact/contact';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route  element={<Header />} >
            <Route exact path="/" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="events" element={<Events />} />
            <Route path="donation" element={<Donation />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="404" element={<Contact />} />
          </Route>

        </Routes>
      </Router>
  );
}

export default App;
