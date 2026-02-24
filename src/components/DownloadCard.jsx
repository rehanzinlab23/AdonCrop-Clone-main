const DownloadCard = ({ icon, name, description }) => {
    return (
        <div className="flex items-start gap-5">
            <div className="w-full max-w-9.5 mt-1.5">
                <i className="icon-4">
                    <img src={icon} alt="" />
                </i>
            </div>
            <div className="flex flex-col mr-auto">
                <span className="text-[#323247] font-roboto text-[16px] font-normal leading-6 mb-1 capitalize">
                    {name}
                </span>
                <p className="text-[13px] font-normal font-segoe text-[#5f5f5f] leading-5">
                    {description}
                </p>
            </div>
            <div className="relative max-w-max">
                <button className="inline-block bg-transparent border-b border-b-[#333] capitalize text-[14px] font-semibold leading-3.5 pt-0 px-0.5 pb-1.5 cursor-pointer">
                    install
                </button>
            </div>
        </div>
    );
};

export default DownloadCard;
