import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";
import YoutubeDownloader from "./pages/YoutubeDownloader";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/youtube-video-downloader"
          element={<YoutubeDownloader />}
        />
      </Routes>
      {/* Footer */}
      <Footer />
      {/* Copyright */}
      <Copyright />
      {/* Progress Bar */}
      <ProgressBar />
    </Router>
  );
};

export default App;
