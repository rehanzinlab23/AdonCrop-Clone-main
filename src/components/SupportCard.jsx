const SupportCard = ({ icon, title, description, link }) => {
  return (
    <a
      href={link}
      className="pt-12.5 px-10 pb-7.5 bg-white border border-[#f5f5f5] rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-shadow duration-100 ease-in-out flex flex-col text-center hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)]"
    >
      <div className="w-17 h-auto my-0 mx-auto">
        <span className="flex items-center justify-center w-full max-w-17 min-w-17 h-17 text-inherit">
          {icon}
        </span>
      </div>
      <div className="flex flex-col mb-5">
        <div>
          <h2 className="font-roboto text-[22px] font-medium leading-[30.8px] my-5 capitalize text-[#373a3c]">
            {title}
          </h2>
          <p className="text-[#5f5f5f] text-[14px] font-segoe font-normal leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SupportCard;
