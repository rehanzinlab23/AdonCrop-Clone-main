import chrome from "../assets/images/chrome.svg";
import InfoBar from "../components/InfoBar";
import { infoData } from "../data/infoData";


const YoutubeDownloader = () => {
  return (
    <section className="post-hero">
      <div id="container">
        {/* Header */}
        <div className="flex items-center flex-col">
          <h1 className="text-[48px] text-[#373a3c] font-medium leading-14.5 text-center mb-5 font-roboto capitalize">
            YouTube Video Downloader{" "}
          </h1>
          <p className="text-[18px] font-normal leading-7 text-center mb-7.5 text-[#5f5f5f] font-segoe w-[65%]">
            Our free Browser Extension allows you to download YouTube videos in
            different video qualities ranging&nbsp;from 360p to ultra high
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
              (324548 votes, average: 4.6 out of 5)
            </div>
          </div>
        </div>
        {/* Info */}
        <InfoBar items={infoData} />
      </div>
    </section>
  );
};


export default YoutubeDownloader;
