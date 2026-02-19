const YoutubeDownloader = () => {
  return (
    <div id="container" className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#373a3c]">YouTube Video Downloader</h1>
      <p className="text-lg text-[#5f5f5f] max-w-2xl mx-auto leading-relaxed">
        Welcome to the YouTube Video Downloader. Here you can download your favorite YouTube videos
        in high quality. This page is currently under development.
      </p>
      <div className="mt-12">
        <button className="bg-[#05c896] text-white px-8 py-3 rounded-full font-medium hover:bg-[#04b084] transition-colors">
          Download Extension
        </button>
      </div>
    </div>
  );
};

export default YoutubeDownloader;
