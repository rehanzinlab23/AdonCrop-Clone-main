import logo from "../assets/images/logo.png";
import SiteNavigation from "./SiteNavigation";
import { useEffect, useRef } from "react";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen, setIsNavOpen]);

  return (
    <>
      <header className="min-h-20 flex items-center relative z-102 bg-white">
        <div id="container" className="flex items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="mr-7.5 w-8 h-6 relative z-6"
              data-tooltip="Addoncrop"
            >
              <img src={logo} alt="Logo" />
            </a>
            <div>
              <ul className="hidden items-center md:flex">
                <li className="mr-7.5">
                  <a
                    href="#"
                    className="text-[#373a3c] no-underline font-segoe font-medium leading-6 text-[15px] capitalize transition-colors duration-250 ease-in-out hover:text-[#05c896]!"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-7.5">
                  <a
                    href="#"
                    ref={toggleRef}
                    className="text-[#373a3c] no-underline font-segoe font-medium leading-6 text-[15px] capitalize transition-colors duration-250 ease-in-out hover:text-[#05c896]!"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavOpen(!isNavOpen);
                    }}
                  >
                    Extensions & Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right */}
          <div className="hidden md:flex ml-auto items-center">
            <div className="flex items-center relative">
              <a
                href="#"
                className="bg-[#403e56] border border-[#403e56] rounded-[30px] text-white! text-[14px] leading-3.5 font-medium font-segoe flex items-center gap-3 capitalize text-center py-2.5 px-5.5 mr-0 transition-all duration-100 ease-in-out"
              >
                support
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Site Navigation */}
      <SiteNavigation
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        navRef={navRef}
      />
    </>
  );
};

export default Navbar;
