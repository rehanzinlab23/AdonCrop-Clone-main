import crx from "../assets/images/crx.png";
import iconWebstore from "../assets/images/icon-webstore.png";
import { X } from "lucide-react";

const CrxModal = ({ onClose }) => {
  return (
    <div
      id="modal"
      className="dd--popup w-92.5 p-[22px_16px_18px] border border-[#ccc] rounded-lg bg-white z-100 shadow-[0_7px_28px_0_rgba(0,0,0,0.07)] flex flex-col gap-3 absolute top-[calc(100%+12px)] right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="inline-block bg-transparent border-0 absolute top-1 right-1 w-5 h-5 cursor-pointer opacity-40 transition-opacity duration-200 ease-in-out outline-none hover:opacity-100"
      >
        <X size={16} />
      </button>

      {/* Text row */}
      <div className="flex items-start gap-2.5">
        <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full overflow-hidden">
          <img src={crx} alt="crx" className="w-full h-full object-contain" />
        </div>
        <p className="font-segoe font-normal text-[#5f5f5f] text-[13px] sm:text-[14px] leading-[1.4] mt-0.5">
          <span className="font-semibold">CRXEmulator</span> extension is needed
          to make YouTube Video Downloader work properly.
        </p>
      </div>

      {/* Buttons row */}
      <div className="flex items-center gap-3 pl-0 sm:pl-12 flex-wrap">
        <a
          href="https://chromewebstore.google.com/detail/crx-emulator/bekkpoinfafbjglppgdobfdeckghdhlo"
          target="_blank"
          rel="noreferrer"
          className="bg-[#05c896] border border-[#05c896] text-white py-2 px-4 flex items-center rounded-[30px] cursor-pointer text-[13px] sm:text-[14px] font-medium font-segoe gap-2 capitalize transition-all duration-100 ease-in-out hover:text-white hover:brightness-90 no-underline"
        >
          <i className="flex items-center justify-center h-5 w-5 shrink-0">
            <img
              src={iconWebstore}
              alt="webstore"
              className="w-full h-full object-contain"
            />
          </i>
          <span className="text-white font-medium text-[13px] sm:text-[14px]">
            Let's Go
          </span>
        </a>

        <a
          href="#"
          className="text-[13px] sm:text-[14px] text-[#373a3c] font-segoe font-medium leading-5 hover:underline"
        >
          Watch video
        </a>
      </div>
    </div>
  );
};

export default CrxModal;
