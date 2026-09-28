import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Team from './pages/Team'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
