import chrome from "../assets/images/chrome.svg";
import InfoBar from "../components/InfoBar";
import { infoData } from "../data/infoData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../assets/images/yt1.webp";
import img2 from "../assets/images/yt2.webp";
import img3 from "../assets/images/yt3.webp";
import img4 from "../assets/images/yt4.webp";
import img5 from "../assets/images/yt5.webp";
import img7 from "../assets/images/yt7.webp";
import img8 from "../assets/images/yt8.webp";
import img9 from "../assets/images/yt9.webp";
import img10 from "../assets/images/yt10.webp";
import img11 from "../assets/images/yt11.webp";
import img12 from "../assets/images/yt12.webp";
import img13 from "../assets/images/yt13.webp";
import img14 from "../assets/images/yt14.webp";
import img15 from "../assets/images/yt15.webp";
import img16 from "../assets/images/yt16.webp";
import img17 from "../assets/images/yt17.webp";
import img18 from "../assets/images/yt18.webp";
import img19 from "../assets/images/yt19.webp";

const YoutubeDownloader = () => {
  const swiperRef = useRef(null);
  const sliderData = [
    {
      id: 1,
      image: img3,
      caption: "YouTube Videos downloaded in standard qualities",
    },
    {
      id: 2,
      image: img18,
      caption: "Download hi-res YouTube videos of up to 4k",
    },
    {
      id: 3,
      image: img17,
      caption: "Lose no quality as you convert & download YouTube videos",
    },
    {
      id: 4,
      image: img7,
      caption: "Trim & download any section of a YouTube video",
    },
    {
      id: 5,
      image: img4,
      caption: "Choose mp3 qualities from 64kbps-320kbps",
    },
    {
      id: 6,
      image: img14,
      caption: "Download YouTube Video thumbnail",
    },
    {
      id: 7,
      image: img12,
      caption: "Download YouTube subtitles as an .SRT file",
    },
    {
      id: 8,
      image: img2,
      caption: "Take YouTube screenshots in 4k Resolution",
    },
    {
      id: 9,
      image: img9,
      caption: "Use float view to watch your YouTube videos",
    },
    {
      id: 10,
      image: img10,
      caption: "Loop your YouTube videos for extra convenience",
    },
    {
      id: 11,
      image: img19,
      caption: "Play just audio from your YouTube videos",
    },
    {
      id: 12,
      image: img16,
      caption: "Easily hide YouTube video comments",
    },
    {
      id: 13,
      image: img13,
      caption: "Never Lose Your Place With Smart Pause",
    },
    {
      id: 14,
      image: img5,
      caption: "Set your preferred video quality for playback",
    },
    {
      id: 15,
      image: img13,
      caption: "Never miss a second of your videos with Smart Pause",
    },
    {
      id: 16,
      image: img11,
      caption: "Picture-in-picture functionality",
    },
    {
      id: 17,
      image: img15,
      caption: "Search for other YouTube videos while viewing another",
    },
    {
      id: 18,
      image: img1,
      caption: "Use dark mode with just a single click",
    },
    {
      id: 19,
      image: img8,
      caption: "Enhance Your YouTube videos with cinema mode",
    },
  ];

  return (
    <>
      {/* Section 1 */}
      <section className="post-hero">
        <div id="container">
          {/* Header */}
          <div className="flex items-center flex-col">
            <h1 className="text-[48px] text-[#373a3c] font-medium leading-14.5 text-center mb-5 font-roboto capitalize">
              YouTube Video Downloader{" "}
            </h1>
            <p className="text-[18px] font-normal leading-7 text-center mb-7.5 text-[#5f5f5f] font-segoe w-[65%]">
              Our free Browser Extension allows you to download YouTube videos
              in different video qualities ranging&nbsp;from 360p to ultra high
              definition 4k. Supports all formats, including AVI, FLV, WebM, MP4
              and MP3 without size and length limits.{" "}
            </p>
            <div className="flex flex-row items-center gap-6">
              <div className="relative max-w-max">
                <button className="bg-[#05c896] border border-[#05c896] text-white py-2.5 px-5.5 flex items-center rounded-[30px] cursor-pointer text-[14px] font-medium font-segoe gap-3 leading-3.5 text-center capitalize transition-all duration-100 ease-in-out hover:text-white hover:brightness-90">
                  <span className="icon flex items-center justify-center w-full max-w-5 min-w-5 h-5 text-inherit">
                    <img src={chrome} alt="Chrome Extension" />
                  </span>
                  <span>Add to Chrome</span>
                </button>
              </div>
              <button className="font-medium font-segoe text-[14px] text-[#403e56] text-center border border-[#403e56] leading-3.5 capitalize py-2.5 px-5.5 relative flex items-center justify-center rounded-[30px] cursor-pointer gap-3 transition-all duration-100 ease-in-out hover:text-white hover:bg-[#403e56]">
                other browsers
              </button>
            </div>
            <div className="flex flex-row items-center gap-3 mt-6">
              <div className="inline-flex items-center relative">
                {[...Array(5)].map((_, i) => (
                  <div className="w-4 h-4 cursor-auto z-1 mr-1">
                    <svg key={i} viewBox="0 0 320 320">
                      <path
                        d="M165.3 11.05c-3.1 79.48-3.98 123.32-4.15 149.07-.04 5.55-.18 29.05-.35 53.68l-.35 49.47c-30.99 16.27-61.97 32.53-92.96 48.8-3.76 1.98-8.16-1.22-7.44-5.41L77.4 205.54c.29-1.66-.27-3.36-1.48-4.54L2.45 129.38c-3.04-2.97-1.36-8.14 2.84-8.75l101.54-14.76a5.116 5.116 0 003.86-2.81l45.41-92.01c1.89-3.81 7.32-3.81 9.2 0z"
                        class="half-star faved"
                      ></path>
                      <path
                        d="M165.25 11.05l45.41 92.01a5.163 5.163 0 003.86 2.81l101.54 14.76c4.21.61 5.89 5.78 2.84 8.75L245.43 201a5.149 5.149 0 00-1.48 4.54l17.35 101.13c.72 4.19-3.68 7.38-7.44 5.41-31.85-15.92-63.7-31.83-95.54-47.75-.56-35.79-1.01-71.58-1.37-107.37-.48-48.63-.78-97.27-.9-145.91 1.88-3.81 7.32-3.81 9.2 0z"
                        class="half-star faved"
                      ></path>
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-[14px] text-[#5f5f5f] leading-5.5 font-normal font-segoe">
                (324607 votes, average: 4.6 out of 5)
              </div>
            </div>
          </div>
          {/* Info */}
          <InfoBar items={infoData} />
        </div>
      </section>
      {/* Section 2 */}
      <section className="relative text-center m-0">
        <div className="w-full relative my-0 mx-auto">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            speed={600}
            className="pixelSwiper"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index} className="pixel-slide">
                <div className="opacity-100 transition-all duration-400 ease-in-out mx-5 my-0 scale-100 cursor-pointer">
                  <img
                    src={item.image}
                    alt="slide"
                    className="block w-full rounded-xl border border-[#efefef]"
                  />
                </div>
                <p className="block w-max py-1 px-6 bg-[#ffefd5] text-[#5f5f5f] text-[12px] font-medium font-segoe leading-4.75 text-center rounded-3xl mt-6 mx-auto mb-0">
                  {item.caption}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between z-999 pointer-events-none">
            {/* Prev */}
            <button
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#f0f0f0] border-0 flex items-center justify-center cursor-pointer shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out opacity-100 hover:opacity-[.5] relative left-[17%]"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                height={36}
                width={36}
              >
                {" "}
                <polyline points="15 18 9 12 15 6"></polyline>{" "}
              </svg>
            </button>
            {/* Next */}
            <button
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#f0f0f0] border-0 flex items-center justify-center cursor-pointer shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out opacity-100 hover:opacity-[.5] relative right-[17%]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                height={36}
                width={36}
              >
                {" "}
                <polyline points="9 18 15 12 9 6"></polyline>{" "}
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoutubeDownloader;
