const FeatureItem = ({ image, title, description }) => {
    return (
        <div className="flex items-start">
            <div className="mt-1.5 w-full max-w-16 min-w-16 mr-7.5">
                <img src={image} alt={title} />
            </div>
            <div className="flex flex-col w-full">
                <h2 className="text-[24px] font-roboto text-[#364962] font-normal leading-7.5 mb-2 tracking-[0.2px]">
                    {title}
                </h2>
                <p className="text-[16px] font-normal font-segoe leading-6.5 text-[#5f5f5f]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureItem;
