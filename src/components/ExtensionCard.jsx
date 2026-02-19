const ExtensionCard = ({ image, title, description, ratingCount, version }) => {
  return (
    <a
      href="#"
      className="text-center flex flex-col bg-white border border-[#f5f5f5] rounded-2xl pt-12.5 px-10 pb-7.5 shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-shadow duration-100 ease-in-out hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
    >
      <div className="h-[74.39px] w-17 my-0 mx-auto">
        <img src={image} alt={`${title} logo`} />
      </div>
      <div className="flex flex-col mb-5">
        <div>
          <h2
            className="text-[22px] text-[#373a3c] font-medium font-roboto leading-[30.8px] my-5 mx-0 capitalize"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p className="text-[#5f5f5f] text-[14px] font-segoe font-normal leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#f1f1f1]">
        <div className="flex items-center">
          <div className="flex items-center mr-1">
            {[...Array(5)].map((_, i) => (
              <div className="w-4 h-4 cursor-auto z-1 mr-1">
                <svg key={i} viewBox="0 0 320 320">
                  <path
                    d="M165.3 11.05c-3.1 79.48-3.98 123.32-4.15 149.07-.04 5.55-.18 29.05-.35 53.68l-.35 49.47c-30.99 16.27-61.97 32.53-92.96 48.8-3.76 1.98-8.16-1.22-7.44-5.41L77.4 205.54c.29-1.66-.27-3.36-1.48-4.54L2.45 129.38c-3.04-2.97-1.36-8.14 2.84-8.75l101.54-14.76a5.116 5.116 0 003.86-2.81l45.41-92.01c1.89-3.81 7.32-3.81 9.2 0z"
                    class="half-star faved"
                  ></path>
                  <path
                    d="M165.25 11.05l45.41 92.01a5.163 5.163 0 003.86 2.81l101.54 14.76c4.21.61 5.89 5.78 2.84 8.75L245.43 201a5.149 5.149 0 00-1.48 4.54l17.35 101.13c.72 4.19-3.68 7.38-7.44 5.41-31.85-15.92-63.7-31.83-95.54-47.75-.56-35.79-1.01-71.58-1.37-107.37-.48-48.63-.78-97.27-.9-145.91 1.88-3.81 7.32-3.81 9.2 0z"
                    class="half-star faved"
                  ></path>
                </svg>
              </div>
            ))}
          </div>
          <span className="font-normal font-segoe text-[14px] text-[#373a3c] leading-5.5 -ml-0.5">
            ({ratingCount})
          </span>
        </div>
        <div className="text-[14px] text-[#373a3c] font-segoe font-normal leading-5.5">
          Version {version}
        </div>
      </div>
    </a>
  );
};

export default ExtensionCard;
