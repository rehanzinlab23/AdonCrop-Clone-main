import { House, Mail, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";

const SiteNavigation = ({ isNavOpen, setIsNavOpen, navRef }) => {
  return (
    <div
      ref={navRef}
      className={`z-101 fixed top-0 right-0 w-full h-full lg:h-auto lg:max-h-screen overflow-y-auto pt-24.5 px-0 pb-12 transition-all duration-500 bg-white shadow-[0_0_50px_0_rgba(1,1,1,0.15)] ${isNavOpen
        ? "visible translate-x-0 lg:translate-y-0 opacity-100"
        : "invisible translate-x-full lg:translate-x-0 lg:-translate-y-5 opacity-0"
        }`}
    >
      <div className="flex flex-col">
        {/* Desktop View (lg and above) */}
        <div className="hidden lg:flex px-6 md:px-12 visible opacity-100 duration-1000 transition-all ease-in-out flex-col md:flex-row items-start justify-between gap-8">
          <ul className="flex flex-col w-full md:w-auto">
            <li className="text-[14px] text-[#a2a9ba] uppercase font-normal pl-4 leading-6 mb-3">
              Video Downloaders
            </li>
            <li className="mb-1.25">
              <Link
                to="/youtube-video-downloader"
                className="text-[#373a3c] flex items-start py-5 px-4 hover:bg-[#f9f9f9]"
                onClick={() => setIsNavOpen(false)}
              >
                <span
                  style={{
                    backgroundImage:
                      "url('https://i0.wp.com/addoncrop.com/wp-content/uploads/2021/03/Addoncrop-YouTube-video-downloader-icon.png')",
                  }}
                  className="flex items-center justify-center mr-3 w-7.5 h-7.5 rounded-lg bg-contain bg-center bg-no-repeat"
                ></span>
                <span className="flex flex-col capitalize">
                  <span className="font-medium text-[14px] font-segoe leading-5.5">
                    YouTube Video Downloader
                  </span>
                  <span className="font-normal text-[12px] text-[#a2a9ba] leading-4.75 font-segoe">
                    video downloader
                  </span>
                </span>
              </Link>
            </li>
            <li className="mb-1.25">
              <a
                href="#"
                className="text-[#373a3c] flex items-start py-5 px-4 hover:bg-[#f9f9f9]"
              >
                <span
                  style={{
                    backgroundImage:
                      "url('https://i3.wp.com/addoncrop.com/wp-content/uploads/2021/03/dm-pop.png')",
                  }}
                  className="flex items-center justify-center mr-3 w-7.5 h-7.5 rounded-lg bg-contain bg-center bg-no-repeat"
                ></span>
                <span className="flex flex-col capitalize">
                  <span className="font-medium text-[14px] font-segoe leading-5.5">
                    Dailymotion Video Downloader
                  </span>
                  <span className="font-normal text-[12px] text-[#a2a9ba] leading-4.75 font-segoe">
                    video downloader
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-1.25">
              <a
                href="#"
                className="text-[#373a3c] flex items-start py-5 px-4 hover:bg-[#f9f9f9]"
              >
                <span
                  style={{
                    backgroundImage:
                      "url('https://i0.wp.com/addoncrop.com/wp-content/uploads/2021/03/vk-popup.png')",
                  }}
                  className="flex items-center justify-center mr-3 w-7.5 h-7.5 rounded-lg bg-contain bg-center bg-no-repeat"
                ></span>
                <span className="flex flex-col capitalize">
                  <span className="font-medium text-[14px] font-segoe leading-5.5">
                    VK Video Downloader
                  </span>
                  <span className="font-normal text-[12px] text-[#a2a9ba] leading-4.75 font-segoe">
                    video downloader
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <ul className="flex flex-col w-full md:w-auto">
            <li className="text-[14px] text-[#a2a9ba] uppercase font-normal pl-4 leading-6 mb-3">
              Music Downloaders
            </li>
            <li className="mb-1.25">
              <a
                href="#"
                className="text-[#373a3c] flex items-start py-5 px-4 hover:bg-[#f9f9f9]"
              >
                <span
                  style={{
                    backgroundImage:
                      "url('https://i1.wp.com/addoncrop.com/wp-content/uploads/2021/03/icon-128.png')",
                  }}
                  className="flex items-center justify-center mr-3 w-7.5 h-7.5 rounded-lg bg-contain bg-center bg-no-repeat"
                ></span>
                <span className="flex flex-col capitalize">
                  <span className="font-medium text-[14px] font-segoe leading-5.5">
                    youTube mp3 converter
                  </span>
                  <span className="font-normal text-[12px] text-[#a2a9ba] leading-4.75 font-segoe">
                    mp3 converter
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-1.25">
              <a
                href="#"
                className="text-[#373a3c] flex items-start py-5 px-4 hover:bg-[#f9f9f9]"
              >
                <span
                  style={{
                    backgroundImage:
                      "url('https://i1.wp.com/addoncrop.com/wp-content/uploads/2021/03/icon-popup.png')",
                  }}
                  className="flex items-center justify-center mr-3 w-7.5 h-7.5 rounded-lg bg-contain bg-center bg-no-repeat"
                ></span>
                <span className="flex flex-col capitalize">
                  <span className="font-medium text-[14px] font-segoe leading-5.5">
                    Soundcloud Music Downloader
                  </span>
                  <span className="font-normal text-[12px] text-[#a2a9ba] leading-4.75 font-segoe">
                    music downloader
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <div className="flex flex-col w-full md:w-auto">
            <a href="#" className="mb-0 block w-full max-w-50">
              <span className="block mb-1 text-[14px] font-normal font-segoe leading-5.5 capitalize text-[#403e56]">
                Blog
              </span>
              <span className="block text-[12px] leading-4.75 font-segoe text-[#a2a9ba]">
                Real Simple Ideas and tips to improve your browsing experience
              </span>
            </a>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <a href="#" className="mb-0 block w-full max-w-50">
              <span className="block mb-1 text-[14px] font-normal font-segoe leading-5.5 capitalize text-[#403e56]">
                Got Any Question?
              </span>
              <span className="block text-[12px] leading-4.75 font-segoe text-[#a2a9ba]">
                We’re here to help and answer any questions you might have
              </span>
            </a>
          </div>
        </div>

        {/* Mobile View (sm and md) */}
        <div className="flex lg:hidden flex-col">
          <ul className="flex flex-col">
            <li>
              <Link
                to="/"
                className="flex items-center py-6 px-10 text-[#05c896] bg-[#f9f9f9] border-l-[6px] border-[#05c896] font-medium font-segoe text-[19px] transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                <House size={26} strokeWidth={1.5} className="mr-6 text-[#05c896]" />
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-6 px-10 text-[#373a3c] font-medium font-segoe text-[19px] hover:bg-[#f9f9f9] border-l-[6px] border-transparent transition-colors"
              >
                <Mail size={26} strokeWidth={1.5} className="mr-6 text-[#373a3c]" />
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-6 px-10 text-[#373a3c] font-medium font-segoe text-[19px] hover:bg-[#f9f9f9] border-l-[6px] border-transparent transition-colors"
              >
                <CircleHelp size={26} strokeWidth={1.5} className="mr-6 text-[#373a3c]" />
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteNavigation;
