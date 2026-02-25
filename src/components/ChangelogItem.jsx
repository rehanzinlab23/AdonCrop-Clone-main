const ChangelogItem = ({ date, version, items }) => {
    return (
        <div className="flex flex-nowrap items-start mb-16">
            <div className="change-log_date">
                <span className="text-right text-[16px] text-[#5f5f5f] font-semibold font-segoe leading-6.5 capitalize">
                    {date}
                </span>
            </div>
            <div className="w-full pl-17.5">
                <span className="flex items-end text-[22px] text-[#5f5f5f] font-semibold font-segoe leading-6.5 capitalize">
                    {version}
                </span>
                <ul className="flex flex-col mt-8 change-log_list">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`${item.type} text-[16px] text-[#5f5f5f] mb-4 leading-6.75 inline-block font-segoe`}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChangelogItem;
