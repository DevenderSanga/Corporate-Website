
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function PagePlaceholder({ title }) {
  return (
    <main className="container section">
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">
        Welcome to R.K CONSULTANTS.
        This page is coming soon.
      </p>
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PagePlaceholder title="404 - Page Not Found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
