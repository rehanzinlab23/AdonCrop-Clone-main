import { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Home from "../pages/Home";
import YoutubeDownloader from "../pages/YoutubeDownloader";

const AppContent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/youtube-video-downloader"
          element={<YoutubeDownloader isNavOpen={isNavOpen} />}
        />
      </Routes>

      <Footer
        type={
          location.pathname === "/youtube-video-downloader" ? "youtube" : "home"
        }
      />
      <Copyright />
      <ProgressBar />
    </>
  );
};

export default AppContent;
