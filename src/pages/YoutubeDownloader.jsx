import chrome from "../assets/images/chrome.svg";
import downloder from "../assets/images/downloader.png";
import { useState, useEffect } from "react";
import InfoBar from "../components/InfoBar";
import SwiperComp from "../components/Swiper";
import FaqItem from "../components/FaqItem";
import LanguageCard from "../components/LanguageCard";
import DownloadCard from "../components/DownloadCard";
import FeatureItem from "../components/FeatureItem";
import ChangelogItem from "../components/ChangelogItem";
import { infoData } from "../data/infoData";
import { faqData } from "../data/faqData";
import { languageData } from "../data/languageData";
import { downloadData } from "../data/downloadData";
import { featureData } from "../data/featureData";
import { changelogData } from "../data/changelogData";
import CrxModal from "../components/CrxModal";
const YoutubeDownloader = ({ isNavOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("features");
  const [showAllChangelog, setShowAllChangelog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [headerModal, setHeaderModal] = useState(false);
  const [openModalId, setOpenModalId] = useState(null);
  useEffect(() => {
    document.title =
      "Completely Free Multi-featured YouTube Video Downloader | Addoncrop";
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`sticky-site-header ${isSticky && !isNavOpen ? "active" : ""}`}
      >
        <div className="container header-wrapper">
          <div className="product-header-info">
            <div className="product-icon">
              <img src={downloder} alt="Downloader Icon" />
            </div>
            <div className="flex flex-col">
              <span className="font-roboto text-[17px] leading-6 font-normal text-[#6f6f6f]">
                YouTube Video Downloader
              </span>
              <div className="flex items-center flex-row mt-1 gap-3">
                <div
                  className="inline-flex items-center relative"
                  data-rating="4.6"
                >
                  {[...Array(5)].map((_, i) => (
                    <div
                      className="w-4 h-4 cursor-auto z-1 mr-1 last:mr-0"
                      key={i}
                    >
                      <svg viewBox="0 0 320 320">
                        <path
                          d="M165.3 11.05c-3.1 79.48-3.98 123.32-4.15 149.07-.04 5.55-.18 29.05-.35 53.68l-.35 49.47c-30.99 16.27-61.97 32.53-92.96 48.8-3.76 1.98-8.16-1.22-7.44-5.41L77.4 205.54c.29-1.66-.27-3.36-1.48-4.54L2.45 129.38c-3.04-2.97-1.36-8.14 2.84-8.75l101.54-14.76a5.116 5.116 0 003.86-2.81l45.41-92.01c1.89-3.81 7.32-3.81 9.2 0z"
                          className="half-star faved"
                        ></path>
                        <path
                          d="M165.25 11.05l45.41 92.01a5.163 5.163 0 003.86 2.81l101.54 14.76c4.21.61 5.89 5.78 2.84 8.75L245.43 201a5.149 5.149 0 00-1.48 4.54l17.35 101.13c.72 4.19-3.68 7.38-7.44 5.41-31.85-15.92-63.7-31.83-95.54-47.75-.56-35.79-1.01-71.58-1.37-107.37-.48-48.63-.78-97.27-.9-145.91 1.88-3.81 7.32-3.81 9.2 0z"
                          className="half-star faved"
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-[12px] text-[#a2a9ba] leading-4.75 font-normal font-segoe">
                  (324840 votes)
                </div>
              </div>
            </div>
            <a
              href="#"
              class="bg-[#05c896] border border-[#05c896] text-white! pt-1.25 pb-1.25 pl-2 pr-2 ml-6.75 flex md:hidden items-center rounded-[30px] cursor-pointer text-[15px] font-normal font-segoe gap-3 leading-3.75 text-center capitalize transition-all duration-100 ease-in-out hover:text-white hover:brightness-90"
            >
              install now
            </a>
          </div>
          <div className="flex ml-auto items-center">
            <div className="flex items-center relative">
              <div className="relative max-w-max">
                <button
                  onClick={() => setHeaderModal(!headerModal)}
                  className={`bg-[#05c896] border border-[#05c896] text-white py-2.5 px-5.5 flex items-center rounded-[30px] cursor-pointer text-[14px] font-medium font-segoe gap-3 leading-3.5 text-center capitalize transition-all duration-100 ease-in-out hover:text-white hover:brightness-90 ${
                    headerModal
                      ? "bg-[#a2a9ba] border-[#a2a9ba] hover:brightness-90"
                      : ""
                  }`}
                >
                  <span className="icon flex items-center justify-center w-full max-w-5 min-w-5 h-5 text-inherit">
                    <img src={chrome} alt="Chrome Extension" />
                  </span>
                  <span>Add to Chrome</span>
                </button>
                {headerModal && (
                  <CrxModal onClose={() => setHeaderModal(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Section 1 */}
      <section className="post-hero">
        <div id="container">
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
                <button
                  onClick={() => setShowModal(!showModal)}
                  className={`bg-[#05c896] border border-[#05c896] text-white py-2.5 px-5.5 flex items-center rounded-[30px] cursor-pointer text-[14px] font-medium font-segoe gap-3 leading-3.5 text-center capitalize transition-all duration-100 ease-in-out hover:text-white hover:brightness-90 ${
                    showModal
                      ? "bg-[#a2a9ba] border-[#a2a9ba] hover:brightness-90"
                      : ""
                  }`}
                >
                  <span className="icon flex items-center justify-center w-full max-w-5 min-w-5 h-5 text-inherit">
                    <img src={chrome} alt="Chrome Extension" />
                  </span>
                  <span>Add to Chrome</span>
                </button>
                {/* CRX Modal */}
                {showModal && <CrxModal onClose={() => setShowModal(false)} />}
              </div>
              <button className="border border-[#403e56] text-[#403e56]! py-2.5 px-5.5 relative flex items-center justify-center rounded-[30px] cursor-pointer gap-3 transition-all duration-100 ease-in-out hover:text-white! hover:bg-[#403e56]">
                <a
                  href="#post-downloads"
                  className="text-[#403e56]! hover:text-white! font-medium font-segoe text-[14px] text-center leading-3.5 capitalize"
                >
                  other browsers
                </a>
              </button>
            </div>
            <div className="flex flex-row items-center gap-3 mt-6">
              <div
                className="inline-flex items-center relative"
                data-rating="4.6"
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    className="w-4 h-4 cursor-auto z-1 mr-1 last:mr-0"
                    key={i}
                  >
                    <svg viewBox="0 0 320 320">
                      <path
                        d="M165.3 11.05c-3.1 79.48-3.98 123.32-4.15 149.07-.04 5.55-.18 29.05-.35 53.68l-.35 49.47c-30.99 16.27-61.97 32.53-92.96 48.8-3.76 1.98-8.16-1.22-7.44-5.41L77.4 205.54c.29-1.66-.27-3.36-1.48-4.54L2.45 129.38c-3.04-2.97-1.36-8.14 2.84-8.75l101.54-14.76a5.116 5.116 0 003.86-2.81l45.41-92.01c1.89-3.81 7.32-3.81 9.2 0z"
                        className="half-star faved"
                      ></path>
                      <path
                        d="M165.25 11.05l45.41 92.01a5.163 5.163 0 003.86 2.81l101.54 14.76c4.21.61 5.89 5.78 2.84 8.75L245.43 201a5.149 5.149 0 00-1.48 4.54l17.35 101.13c.72 4.19-3.68 7.38-7.44 5.41-31.85-15.92-63.7-31.83-95.54-47.75-.56-35.79-1.01-71.58-1.37-107.37-.48-48.63-.78-97.27-.9-145.91 1.88-3.81 7.32-3.81 9.2 0z"
                        className="half-star faved"
                      ></path>
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-[14px] text-[#5f5f5f] leading-5.5 font-normal font-segoe">
                (324831 votes, average: 4.6 out of 5)
              </div>
            </div>
          </div>
          {/* Info */}
          <InfoBar items={infoData} />
        </div>
      </section>
      {/* Section 2 */}
      <section className="relative text-center m-0">
        <SwiperComp />
      </section>
      {/* Section 3 */}
      <section className="post-tabs-container">
        <div className="flex justify-center w-full h-auto max-w-250 m-auto">
          <ul className="mb-12 flex items-center relative border border-[#efefef] rounded-[36px]">
            <li>
              <a
                onClick={() => setActiveTab("features")}
                className="last:mr-0 flex items-center justify-center text-[16px] capitalize rounded-[36px] transition-all duration-200 ease-in-out cursor-pointer px-7 py-2"
                style={{
                  color: activeTab === "features" ? "white" : "#a2a9ba8a",
                }}
              >
                features
              </a>
            </li>
            <li>
              <a
                onClick={() => setActiveTab("changelog")}
                className="last:mr-0 flex items-center justify-center text-[16px] capitalize rounded-[36px] transition-all duration-200 ease-in-out cursor-pointer px-7 py-2"
                style={{
                  color: activeTab === "changelog" ? "white" : "#a2a9ba8a",
                }}
              >
                changelog
              </a>
            </li>
            <li
              className="absolute top-0 left-0 h-full z-[-1] bg-[#403e56] rounded-[36px] transition-transform duration-200"
              style={{
                transform:
                  activeTab === "changelog"
                    ? "translateX(100%)"
                    : "translateX(0)",
                width: activeTab === "changelog" ? "124.3px" : "118px",
              }}
            ></li>
          </ul>
        </div>
        {/* Feature */}
        <div
          className="grid grid-cols-1 gap-12.5 pb-20 relative p-20 w-full max-w-250 my-0 mx-auto rounded-lg border border-[#efefef]"
          style={{ display: activeTab === "features" ? "grid" : "none" }}
        >
          {featureData.map((feature, index) => (
            <div key={index} className={index >= 6 && !showAll ? "hidden" : ""}>
              <FeatureItem
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
          <div
            onClick={() => setShowAll(!showAll)}
            className="absolute -bottom-4.5 left-[50%] -translate-x-1/2 transform bg-[#05c896] border border-[#05c896] text-white flex items-center rounded-[30px] cursor-pointer text-[14px] font-medium gap-3 py-2.5 px-5.5 text-center capitalize leading-3.5 font-segoe transition-all duration-100 ease-in-out hover:brightness-90"
          >
            {showAll ? "hide" : "read more"}
          </div>
        </div>
        {/* Change-Log */}
        <div
          className="change-log_wrapper"
          style={{ display: activeTab === "changelog" ? "block" : "none" }}
        >
          {changelogData.map((log, index) => (
            <div
              key={index}
              className={index >= 3 && !showAllChangelog ? "hidden" : ""}
            >
              <ChangelogItem
                date={log.date}
                version={log.version}
                items={log.items}
              />
            </div>
          ))}
          <div
            onClick={() => setShowAllChangelog(!showAllChangelog)}
            className="absolute -bottom-4.5 left-[50%] -translate-x-1/2 transform bg-[#05c896] border border-[#05c896] text-white flex items-center rounded-[30px] cursor-pointer text-[14px] font-medium gap-3 py-2.5 px-5.5 text-center capitalize leading-3.5 font-segoe transition-all duration-100 ease-in-out hover:brightness-90"
          >
            {showAllChangelog ? "hide" : "read more"}
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="flex flex-col py-15 px-6">
        <h3 className="text-[45px] leading-[49.2px] font-thin font-roboto block text-center mb-3 text-[#373a3c]">
          Its Speaks <b>Your Language</b>
        </h3>
        <div className="flex items-start flex-wrap w-full max-w-250 mt-12 mx-auto">
          {languageData.map((lang, index) => (
            <LanguageCard key={index} flag={lang.flag} label={lang.label} />
          ))}
        </div>
      </section>
      {/* Section 5 */}
      <section className="post-faqs">
        <h3 className="text-[45px] text-[#373a3c] leading-[49.2px] font-thin font-roboto block text-center mb-3">
          <b>Frequently Asked Questions</b>
        </h3>
        <div className="max-w-207.5 flex flex-col pb-7.5 w-full m-auto mt-12">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              activeIndex={activeIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </section>
      {/* Section 6 */}
      <section className="post-downloads scroll-mt-65" id="post-downloads">
        <h3 className="text-[45px] text-[#373a3c] leading-[49.2px] font-thin font-roboto block text-center mb-3">
          It's <b>Unlimited &amp; Free</b> to Use - <b>Install Today! </b>
        </h3>
        <div className="post-downloads-wrapper">
          {downloadData.map((item, index) => (
            <DownloadCard
              key={index}
              icon={item.icon}
              name={item.name}
              description={item.description}
              isOpen={openModalId === item.id}
              setOpenModalId={() =>
                setOpenModalId(openModalId === item.id ? null : item.id)
              }
            />
          ))}
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center gap-5 mt-20">
          <div className="flex items-center gap-2">
            <span className="text-[16px] text-[#403e56] font-segoe leading-4 font-semibold">
              Developer Mode :
            </span>
            <p className="text-[1rem] text-[#5f5f5f] font-segoe font-normal leading-4">
              You Can Also Install this extension in Developer Mode
            </p>
            <span className="flex items-center gap-3">
              <button className="text-[16px] text-[#403e56] leading-4 font-segoe font-normal inline-block pb-0.5 border-b border-b-[#403e56] cursor-pointer">
                Download
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoutubeDownloader;
