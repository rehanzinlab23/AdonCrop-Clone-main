export const changelogData = [
  {
    date: "May 14, 2022",
    version: "Version 17.2.0",
    items: [
      { type: "add", text: "Support to download YouTube Shorts" },
      { type: "add", text: "Support to download subtitles in .srt format" },
      { type: "add", text: "Search function in subtitles" },
      { type: "add", text: "192Kbps conversion for mp3" },
      {
        type: "add",
        text: "Multithreading (Download files with multiple connections to the server)",
      },
      { type: "add", text: "Pin button in the video and mp3 menu" },
      { type: "add", text: "Button to minimize the flixmate card" },
      { type: "log-fixed", text: "YouTube Audio mode" },
      { type: "log-fixed", text: "Special character video downloads bug" },
      { type: "log-fixed", text: "Volume control in the full-Screen player" },
      { type: "log-fixed", text: "Floating player in the video preview" },
    ],
  },
  {
    date: "Mar 8, 2022",
    version: "Version 17.1.0",
    items: [
      {
        type: "changed",
        text: "Combine standard and Flixmate downloads for a better experience",
      },
      { type: "add", text: "compact extension display mode" },
    ],
  },
  {
    date: "Mar 2, 2022",
    version: "Version 17.0.4",
    items: [
      {
        type: "log-fixed",
        text: "Some minor UI issues related to Flixmate Media Toolkit",
      },
    ],
  },
  {
    date: "Feb 28, 2022",
    version: "Version 17.0.3",
    items: [
      {
        type: "add",
        text: "UHD (1080p, 1440p, 4k) download support with Flixmate Media Toolkit",
      },
      {
        type: "add",
        text: "Unlimited MP3 conversion support with Flixmate Media Toolkit.",
      },
    ],
  },
  {
    date: "Feb 25, 2022",
    version: "Version 17.0.2",
    items: [{ type: "log-fixed", text: "Some minor UI issues" }],
  },
  {
    date: "Feb 15, 2022",
    version: "Version 17.0.1",
    items: [
      { type: "changed", text: "Enhancer bar's blue color to dark" },
      { type: "add", text: "Option to hide the enhancer bar." },
    ],
  },
  {
    date: "Feb 10, 2022",
    version: "Version 17.0.0",
    items: [
      { type: "add", text: "Extension theme with a clean and compact UI" },
      {
        type: "changed",
        text: "Download button with a bar with other feature toggles on YouTube for more accessible and quick interaction",
      },
      { type: "add", text: "Video thumbnails download support." },
      { type: "add", text: "Video subtitles download support." },
    ],
  },
  {
    date: "Jul 28, 2021",
    version: "Version 16.5.0",
    items: [
      {
        type: "log-fixed",
        text: "Fixed: Video information request failed with status code 404",
      },
    ],
  },
  {
    date: "Dec 17, 2020",
    version: "Version 16.4.4",
    items: [
      { type: "log-fixed", text: "Fixed volume control using the mouse wheel" },
      { type: "log-fixed", text: "Fixed dark mode and theater mode" },
      { type: "log-fixed", text: "Fixed video search" },
      { type: "log-fixed", text: "Fixed float video player sizing" },
      {
        type: "log-fixed",
        text: "Fixed age-restricted videos have no downloads for logged out users",
      },
      {
        type: "log-fixed",
        text: "Fixed video configuration not found for some videos",
      },
    ],
  },
  {
    date: "Oct 31, 2020",
    version: "Version 16.4.3",
    items: [{ type: "log-fixed", text: "Fixed YouTube signature extraction" }],
  },
  {
    date: "Oct 22, 2020",
    version: "Version 16.4.2",
    items: [
      { type: "add", text: "Added multiple locales" },
      { type: "log-fixed", text: 'Fix "video configuration not found" error' },
      {
        type: "log-fixed",
        text: "Fix video file size not shown in the download menu",
      },
    ],
  },
  {
    date: "Aug 21, 2020",
    version: "Version 16.4.1",
    items: [
      {
        type: "log-fixed",
        text: "Fixed video configuration not found for age-restricted videos",
      },
    ],
  },
  {
    date: "Aug 14, 2020",
    version: "Version 16.4.0",
    items: [
      {
        type: "changed",
        text: "Disabled errors message on live and upcoming videos",
      },
    ],
  },
  {
    date: "Mar 19, 2020",
    version: "Version 16.3.2",
    items: [
      { type: "log-fixed", text: "Fixed YouTube embed list id issue" },
      {
        type: "add",
        text: "Improved MP3 and MP4 converter API Improved signature player key extraction Improved signature cipher extraction",
      },
    ],
  },
  {
    date: "Mar 18, 2020",
    version: "Version 16.3.1",
    items: [
      {
        type: "log-fixed",
        text: 'Fixed "Failed to parser video configuration" and "Unexpected token in JSON" error',
      },
    ],
  },
  {
    date: "Mar 10, 2020",
    version: "Version 16.3.0",
    items: [
      {
        type: "log-fixed",
        text: "Fixed YouTube video information parsing error (Unexpected token in JSON)",
      },
    ],
  },
  {
    date: "Mar 6, 2020",
    version: "Version 16.2.3",
    items: [
      {
        type: "log-fixed",
        text: "Issue Fixed ( Cannot read property 'indexOf' of undefined )",
      },
    ],
  },
  {
    date: "Sep 11, 2019",
    version: "Version 16.2.2",
    items: [
      {
        type: "log-fixed",
        text: "Fixed YouTube API changes to video downloads. This caused an error where the users were unable to download videos. The issue has been fixed.",
      },
    ],
  },
  {
    date: "Jul 30, 2019",
    version: "Version 16.2.1",
    items: [
      {
        type: "log-fixed",
        text: "Fixed YouTube API's which caused issues with video title and duration. The data now appears correctly.",
      },
    ],
  },
  {
    date: "Jun 25, 2019",
    version: "Version 16.2.0",
    items: [
      {
        type: "log-fixed",
        text: "The signature issue has been Fixed. This issue did not allow certain videos to get downloaded.",
      },
    ],
  },
  {
    date: "Feb 13, 2019",
    version: "Version 16.1.2",
    items: [
      {
        type: "add",
        text: "Added ability for users to download 480p and 1080p video qualities. 720p quality was already available for download",
      },
      {
        type: "log-fixed",
        text: "Fixed some minor bugs and improved overall functionality",
      },
    ],
  },
  {
    date: "Feb 2, 2019",
    version: "Version 16.1.0",
    items: [
      {
        type: "log-fixed",
        text: "Fixed the issue with 720p video downloads. The 720p videos can be downloaded with a single click as usual.",
      },
      {
        type: "add",
        text: "With this update, the YouTube video downloader gets a separate downloader. All the videos that you download with this extension will get listed on its download page.",
      },
      {
        type: "add",
        text: "The limit on MP3 conversion and download has been increased from 30 minutes to 60 minutes based on user's requests.",
      },
    ],
  },
  {
    date: "Oct 10, 2018",
    version: "Version 16.0.0",
    items: [
      {
        type: "add",
        text: "Added the ability for users to search YouTube videos without interrupting the current playing video. The search bar appears in the suggested video bar and can be used to search for youtube videos while staying on the same page.",
      },
      {
        type: "add",
        text: "Added the ability for users to control the volume of the video using their Mousewheel. Just hover over the playbox and scroll your mouse wheel.",
      },
      {
        type: "add",
        text: "Added the audio mode feature. It allows users to browse YouTube in audio mode. saves bandwidth and increases loading speed. Very helpful for users with low or slow data.",
      },
      {
        type: "add",
        text: "This update gives users the ability to hide Feed recommendations from YouTube. This will stop YouTube from showing videos in the Recommended Videos section on the YouTube homepage.",
      },
      {
        type: "add",
        text: "A preferred video playback feature has been added. You can now select a default video quality and every video will now play with this default quality.",
      },
      {
        type: "add",
        text: "Our extensions now feature on-page downloads for MP3 files. These files can be downloaded without having to leave the web page. Another added feature is MP3 trimming. Videos can be cut to the user's liking and downloaded.",
      },
      {
        type: "add",
        text: "We've added support for the Mobile version of Firefox to our extensions. Extensions can be installed with the same procedure.",
      },
    ],
  },
  {
    date: "Sep 12, 2018",
    version: "Version 15.0.6",
    items: [
      {
        type: "add",
        text: "We've added support for the Mobile version of Firefox to our extensions. Extensions can be installed with the same procedure.",
      },
      {
        type: "add",
        text: "The QR code feature has been added. This feature can be used to download videos directly on your mobile phone.",
      },
      {
        type: "add",
        text: "The download button and download menu have been updated. The new UI is very clean and user-friendly.",
      },
      {
        type: "log-fixed",
        text: "Youtube recently changed its video signatures which caused our extension to stop working. This issue has been fixed and you can continue to use our extension. Enjoy",
      },
    ],
  },
  {
    date: "Jul 30, 2018",
    version: "Version 15.0.5",
    items: [
      {
        type: "log-fixed",
        text: "The full-screen video bug has been fixed. This update also features some minor bug fixes.",
      },
    ],
  },
  {
    date: "Feb 26, 2018",
    version: "Version 15.0.4",
    items: [
      {
        type: "removed",
        text: "The option for settings a custom download folder has been removed. The decision was made based on feedback from our users.",
      },
      {
        type: "add",
        text: "A new feature has been added which allows users to customize the color of the download button. This feature can be accessed from the settings menu.",
      },
      {
        type: "add",
        text: "A feature allows users to rename the files before they are downloaded. Both uppercase and lowercase letters can be used in the name.",
      },
      {
        type: "log-fixed",
        text: "All the issues related to clipconverter.cc have been fixed",
      },
      {
        type: "log-fixed",
        text: "All the issues with selecting a customized download path for HD videos have been fixed along with some major updates.",
      },
      {
        type: "log-fixed",
        text: "An issue where users were not able to download media with correct names on multiple social platforms.",
      },
      {
        type: "log-fixed",
        text: "This update features some minor fixes and improvements based on user feedback.",
      },
    ],
  },
];
