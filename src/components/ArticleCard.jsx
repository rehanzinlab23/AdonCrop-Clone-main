const ArticleCard = ({
  image,
  title,
  date,
  description,
  link = "#",
  isLast,
}) => {
  return (
    <div
      className={`pt-12.5 px-10 pb-7.5 bg-white border border-[#f5f5f5] rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-shadow duration-100 ease-in-out flex flex-col hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)]
      ${isLast ? "mb-0" : "mb-10"}`}
    >
      <div className="flex items-start">
        <div className="w-10 min-w-10 h-10 mr-3 mt-1.5">
          <img src={image} alt="avatar" className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <a href={link}>
            <h2 className="text-[22px] font-roboto font-medium leading-7.5 text-[#373a3c]">
              {title}
            </h2>
          </a>
          <p className="text-[14px] font-normal font-segoe leading-5 text-[#5f5f5f]">
            {date}
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-5">
        <p className="my-5 mx-0 text-[14px] text-[#5f5f5f] font-normal font-segoe leading-5.5">
          {description}
        </p>
        <a
          href={link}
          className="text-[14px] font-normal font-segoe leading-5.25 text-[#373a3c]"
        >
          Read More <span className="ml-0.75">→</span>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
