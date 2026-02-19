import Navbar from "./components/Navbar";
import { useState } from "react";
import ExtensionCard from "./components/ExtensionCard";
import ArticleCard from "./components/ArticleCard";
import SupportCard from "./components/SupportCard";
import downloader from "./assets/images/downloader.png";
import converter from "./assets/images/converter.png";
import soundCloud from "./assets/images/soundcloud.png";
import blog from "./assets/images/blog.png";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const extensionsData = [
    {
      id: 1,
      image: downloader,
      title: "YouTube <br /> Video Downloader",
      description:
        "Our free Browser Extension allows you to download YouTube videos in different video qualities ranging from 360p to ultra high definition 4k. Supports all formats, including AVI, FLV, WebM, MP4 and MP3 without size and length limits.",
      ratingCount: "70547",
      version: "17.7.5",
    },
    {
      id: 2,
      image: converter,
      title: "YouTube <br /> Mp3 Converter",
      description:
        "Want to convert videos from YouTube to mp3 without needing to leave the platform? Our mp3 YouTube converter is a free browser extension that supports mp3 bitrates up to a quality of 320kbps and can be easily trimmed & cut to whatever size or duration you need.",
      ratingCount: "18003",
      version: "7.5.4",
    },
    {
      id: 3,
      image: soundCloud,
      title: "Soundcloud <br /> Music Downloader",
      description:
        "Download single tracks or entire playlists of Soundcloud to mp3 music with ID3 tags, ease & all for free! Ours best Soundcloud to mp3 converter browser extension supports a range of browsers, as well as letting you cut & trim your favourite audio content to your exact requirements.",
      ratingCount: "17040",
      version: "7.0.4",
    },
  ];

  const articlesData = [
    {
      id: 1,
      image: blog,
      title:
        "Download YouTube Videos with Addoncrop: The Best Chrome Extension for Offline Enjoyment",
      date: "Apr 22, 2021",
      description:
        "Addoncrop YouTube video downloader is the only free extension available online that offers up to 4K video downloads. You can download any YouTube video with maximum accuracy by using this extension",
      link: "#",
    },
    {
      id: 2,
      image: blog,
      title:
        "Convert YouTube to Mp3 with Addoncrop: Free Chrome Extension for High-Quality Downloads",
      date: "Apr 22, 2021",
      description:
        "There is no need to go through the long process of first downloading the YouTube video and then using a converter to convert it into the MP3 format. You can do it all with a single click by using the Addoncrop YouTube MP3 Converter. Let us see how it works.",
      link: "#",
    },
    {
      id: 3,
      image: blog,
      title:
        "Streamlined SoundCloud Experience: Download Songs with Addoncrop SoundCloud Music Downloader",
      date: "Apr 23, 2021",
      description:
        "If you are a fan of podcasters, musicians, or upcoming artists, you will find the Addoncrop SoundCloud Music Downloader an excellent tool. It would help you to download the latest song in mp3 format with a single click.",
      link: "#",
    },
  ];

  const supportData = [
    {
      id: 1,
      title: "Help Center",
      description:
        "The fastest way to get support is through our Help Center. Here you can find information about our products, including troubleshooting information for top issues.",
      link: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-17 w-17">
          <defs>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.925 31.925"
              id="icon-help"
              fill="#05c896"
            >
              <path fill="none" d="M-1-1h582v402H-1z" />
              <path d="M15.963 2.001A13.962 13.962 0 1 1 2 15.963 13.977 13.977 0 0 1 15.963 2.001m0-2a15.962 15.962 0 1 0 15.962 15.962A15.962 15.962 0 0 0 15.963.001z" />
              <path d="M14.329 17.513a2.374 2.374 0 0 1 .49-1.433 9.248 9.248 0 0 1 1.443-1.483 10.084 10.084 0 0 0 1.321-1.371 1.993 1.993 0 0 0 .367-1.2 1.953 1.953 0 0 0-1.982-2 2.073 2.073 0 0 0-1.419.543 3.56 3.56 0 0 0-.954 1.582l-2.152-.939a5.027 5.027 0 0 1 1.724-2.657 4.632 4.632 0 0 1 2.9-.926 4.959 4.959 0 0 1 2.287.531 4.154 4.154 0 0 1 1.651 1.5 3.979 3.979 0 0 1 .611 2.175 3.681 3.681 0 0 1-.538 1.965 8.76 8.76 0 0 1-1.638 1.865 13.792 13.792 0 0 0-1.359 1.322 1.536 1.536 0 0 0-.379 1 2.868 2.868 0 0 0 .1.667h-2.2a2.74 2.74 0 0 1-.273-1.141zm1.468 6.969a1.855 1.855 0 0 1-1.357-.543 1.831 1.831 0 0 1-.551-1.359 1.875 1.875 0 0 1 .551-1.372 1.835 1.835 0 0 1 1.357-.556 1.868 1.868 0 0 1 1.908 1.928 1.833 1.833 0 0 1-.549 1.359 1.863 1.863 0 0 1-1.359.543z" />
            </symbol>
          </defs>
          <use href="#icon-help" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Contribute",
      description:
        "Yes, we're looking for help improving our products. You can write a blog, or if English is not your native language, you may wish to contribute as a translator.",
      link: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-17 w-17">
          <defs>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="icon-contribution"
              fill="#05c896"
            >
              <path d="M474.644 74.27C449.391 45.616 414.358 29.836 376 29.836c-53.948 0-88.103 32.22-107.255 59.25-4.969 7.014-9.196 14.047-12.745 20.665-3.549-6.618-7.775-13.651-12.745-20.665-19.152-27.03-53.307-59.25-107.255-59.25-38.358 0-73.391 15.781-98.645 44.435C13.267 101.605 0 138.213 0 177.351c0 42.603 16.633 82.228 52.345 124.7 31.917 37.96 77.834 77.088 131.005 122.397 19.813 16.884 40.302 34.344 62.115 53.429l.655.574c2.828 2.476 6.354 3.713 9.88 3.713s7.052-1.238 9.88-3.713l.655-.574c21.813-19.085 42.302-36.544 62.118-53.431 53.168-45.306 99.085-84.434 131.002-122.395C495.367 259.578 512 219.954 512 177.351c0-39.138-13.267-75.746-37.356-103.081zM309.193 401.614c-17.08 14.554-34.658 29.533-53.193 45.646-18.534-16.111-36.113-31.091-53.196-45.648C98.745 312.939 30 254.358 30 177.351c0-31.83 10.605-61.394 29.862-83.245C79.34 72.007 106.379 59.836 136 59.836c41.129 0 67.716 25.338 82.776 46.594 13.509 19.064 20.558 38.282 22.962 45.659a15 15 0 0 0 28.524 0c2.404-7.377 9.453-26.595 22.962-45.66 15.06-21.255 41.647-46.593 82.776-46.593 29.621 0 56.66 12.171 76.137 34.27C471.395 115.957 482 145.521 482 177.351c0 77.007-68.745 135.588-172.807 224.263z" />
            </symbol>
          </defs>
          <use href="#icon-contribution" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {/* Main Body Content */}
      <div id="container">
        {/* Section 1 */}
        <section>
          <h1 className="block text-center mb-3 font-roboto text-[45px] text-[#373a3c] leading-12.25">
            <span className="font-thin">Trending</span>{" "}
            <span className="font-medium">Extensions</span>
          </h1>
          <p className="text-[18px] font-normal font-segoe text-center w-[80%] max-w-3xl my-0 mx-auto leading-7.25 text-[#5f5f5f]">
            Our Best Video Downloader and MP3 Downloader Extensions
          </p>
          {/* Extension Data */}
          <div className="mt-15 grid grid-cols-3 gap-10">
            {extensionsData.map((ext) => (
              <ExtensionCard
                key={ext.id}
                image={ext.image}
                title={ext.title}
                description={ext.description}
                ratingCount={ext.ratingCount}
                version={ext.version}
              />
            ))}
          </div>
        </section>
        {/* Section 2 */}
        <section className="my-0 mx-auto w-full max-w-195 py-15 px-0">
          <h3 className="text-[45px] leading-[49.2px] font-thin block text-center mb-3 font-roboto text-[#373a3c]">
            Popular Articles
          </h3>
          <p className="text-[18px] font-normal font-segoe text-center w-[80%] max-w-3xl my-0 mx-auto leading-7.25 text-[#5f5f5f]">
            Real simple ideas and tips to Downloads Videos from your favorite
            Websites
          </p>
          {/* Cards */}
          <div className="mt-15">
            {articlesData.map((article, index) => (
              <ArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                date={article.date}
                description={article.description}
                link={article.link}
                isLast={index === articlesData.length - 1}
              />
            ))}
          </div>
        </section>
        {/* Section 3 */}
        <section className="w-full max-w-235 m-0 mx-32.5 h-[577.97px]">
          <h3 className="text-[45px] leading-[49.2px] font-thin block text-center mb-3 font-roboto text-[#373a3c]">
            Support
          </h3>
          <p className="w-[80%] h-[28.8px] max-w-3xl text-[18px] font-normal font-segoe text-center my-0 mx-auto leading-7.25 text-[#5f5f5f]">
            We have a strategy for serving things right
          </p>
          {/* Support */}
          <div className="mt-15 grid grid-cols-2 gap-10">
            {supportData.map((support) => (
              <SupportCard
                key={support.id}
                icon={support.icon}
                title={support.title}
                description={support.description}
                link={support.link}
              />
            ))}
          </div>
        </section>
      </div>
      {/* Progress Bar */}
      <ProgressBar />
      {/* Footer */}
      <Footer />
      {/* Copyright */}
      <Copyright />
    </>
  );
};

export default App;
