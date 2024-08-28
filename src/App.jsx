import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-cream min-h-screen p-4">
      <Router>
        <Navbar />
        <div
          className="App"
          style={{
            "--color-lavender": "#C6C2F2",
            "--color-obsidian": "#262628",
            "--color-cream": "#FFF6EE",
            "--color-lime": "#D6DC82",
            "--color-cherry": "#D86072",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
       <footer className="text-center mt-8">
        <p className="text-cherry">© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div> *
  );
}

export default App;
