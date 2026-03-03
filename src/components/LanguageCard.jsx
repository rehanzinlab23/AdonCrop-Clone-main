const LanguageCard = ({ flag, label }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[16.6%] mb-8">
      <span className="icon-3">
        {flag}
        <span className="text-[14px] font-normal leading-5.25 capitalize mt-1.5 text-[#5f5f5f] font-segoe whitespace-nowrap">
          {label}
        </span>
      </span>
    </div>
  );
};

export default LanguageCard;
