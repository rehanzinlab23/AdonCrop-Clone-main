import InfoItem from "./InfoItem";

const InfoBar = ({ items }) => {
  return (
    <div className="flex justify-evenly items-center w-full max-w-150 mt-20 mx-auto">
      {items.map((item, index) => (
        <InfoItem
          key={index}
          icon={item.icon}
          value={item.value}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default InfoBar;
