import crx from "../assets/images/crx.png";
import iconWebstore from "../assets/images/icon-webstore.png";
import { X } from "lucide-react";

const CrxModal = ({ onClose }) => {
  return (
    <div
      id="modal"
      className="dd--popup w-92.5 p-[22px_16px_18px] border border-[#ccc] rounded-lg bg-white z-100 shadow-[0_7px_28px_0_rgba(0,0,0,0.07)] flex flex-col gap-4 absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2"
    >
      <button
        onClick={onClose}
        className="inline-block bg-transparent border-0 absolute top-1 right-1 w-5 h-5 cursor-pointer opacity-40 transition-opacity duration-200 ease-in-out outline-none hover:opacity-100"
      >
        <X size={16} />
      </button>
      <div className="flex items-start gap-2.5">
        <div className="flex items-center justify-center w-full max-w-10.5 min-w-10.5 h-10.5 rounded-[50%]">
          <img src={crx} alt="128" />
        </div>
        <p className="font-segoe font-normal text-[#5f5f5f]! text-[15px] leading-5.25">
          {" "}
          <span className="font-medium">CRXEmulator</span> extension is needed
          to make YouTube Video Downloader work properly.
        </p>
      </div>
      <div className="flex items-center justify-start flex-wrap pl-13 gap-y-2.5 gap-x-4">
        <a
          href="https://chromewebstore.google.com/detail/crx-emulator/bekkpoinfafbjglppgdobfdeckghdhlo"
          target="_blank"
          className="bg-[#05c896] border border-[#05c896] text-white py-2.5 px-5.5 flex items-center rounded-[30px] cursor-pointer text-[14px] font-medium font-segoe gap-3 leading-3.5 text-center capitalize transition-all duration-100 ease-in-out hover:text-white hover:brightness-90"
        >
          <i className="icon flex items-center justify-center w-full text-inherit h-5 min-w-5 max-w-5">
            <img src={iconWebstore} alt="icon-webstore" />
          </i>
          <span className="mr-3 capitalize text-[14px] font-segoe font-medium text-white leading-3.5">
            let's go
          </span>
        </a>
        <a
          href="#"
          className="inline-block text-[14px] text-[#373a3c]! font-segoe font-medium leading-5 mb-0 ml-6 hover:underline!"
        >
          Watch video
        </a>
      </div>
    </div>
  );
};

export default CrxModal;
