import { useEffect, useState } from "react";

const CIRCUMFERENCE = 125.6;

const ProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(CIRCUMFERENCE);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          const progress = (scrollY / totalHeight) * CIRCUMFERENCE;

          setScrollProgress(CIRCUMFERENCE - progress);
          setIsVisible(scrollY > 50);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`progress-wrap fixed right-12.5 bottom-12.5 h-11.5 w-11.5 rounded-full bg-white cursor-pointer z-1000 transition-all duration-200 ease-linear ${
        isVisible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-4"
      }`}
    >
      <svg width="46" height="46" viewBox="0 0 46 46" className="-rotate-90">
        <circle
          cx="23"
          cy="23"
          r="20"
          stroke="#e6e6e6"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="23"
          cy="23"
          r="20"
          fill="none"
          stroke="#403e56"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: scrollProgress,
            transition: "stroke-dashoffset 0.15s linear",
          }}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
