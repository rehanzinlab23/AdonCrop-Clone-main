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

const SwiperComp = () => {
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
            <div className="opacity-100 transition-all duration-400 ease-in-out mx-5 my-0 scale-100 cursor-pointer p-4 rounded-xl">
              <img
                src={item.image}
                alt="slide"
                className="block rounded-xl border border-[#efefef]"
              />
            </div>
            <p className="block w-max py-1 px-6 bg-[#ffefd5] text-[#5f5f5f] text-[12px] font-medium font-segoe leading-4.75 text-center rounded-3xl mt-6 ml-auto mr-auto mb-0">
              {item.caption}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Buttons Left and right */}
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
  );
};

export default SwiperComp;
