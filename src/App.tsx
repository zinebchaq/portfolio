import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetail from './pages/Portfolio/ProjectDetail/ProjectDetail';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './styles/global.css';

// Composant pour remonter en haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantané AVANT que la page ne s'affiche
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // ← Instantané, pas d'animation
    });
  }, [pathname]);

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projets/:projectId" element={<ProjectDetail />} />
          <Route path="/Projets" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;