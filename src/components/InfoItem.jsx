const InfoItem = ({ icon, value, label }) => {
  return (
    <div className="flex items-center">
      <div className="hidden lg:block w-full max-w-8 mt-1.5 mr-3">
        <span className="icon-2 flex items-center justify-center w-full max-w-8 min-w-8 h-8 text-inherit">
          {icon}
        </span>
      </div>
      <div className="flex flex-col">
        <p className="capitalize text-[15px] text-[#5f5f5f] font-semibold font-segoe leading-6">
          {value}
        </p>
        <p className="font-roboto text-[14px] text-[#a2a9ba] leading-5.5 font-medium capitalize">
          {label}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
