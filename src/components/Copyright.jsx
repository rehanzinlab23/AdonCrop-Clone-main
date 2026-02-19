const Copyright = () => {
  return (
    <div className="flex items-center gap-8 my-0 mx-auto py-5 px-10 w-full max-w-7xl border-t border-t-[#efefef] h-[63.40px]">
      <p className="font-segoe font-normal text-[14px] text-[#5f5f5f] leading-5.5 h-[22.40px]">
        © 2026 Addoncrop.com All rights reserved
      </p>
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-[12px] text-[#5f5f5f] font-normal leading-3 underline!"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-[12px] text-[#5f5f5f] font-normal leading-3 underline!"
        >
          Terms of service
        </a>
        <a
          href="#"
          className="text-[12px] text-[#5f5f5f] font-normal leading-3 underline! uppercase"
        >
          eula
        </a>
      </div>
    </div>
  );
};

export default Copyright;
