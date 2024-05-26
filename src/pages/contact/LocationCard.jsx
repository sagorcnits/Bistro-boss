import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";

const LocationCard = ({ info }) => {
  const icon = () => {
    if (info.title == "PHONE") {
      return <FiPhoneCall className="block mx-auto"></FiPhoneCall>;
    } else if (info.title == "ADDRESS") {
      return <IoLocationSharp></IoLocationSharp>;
    } else {
      return <MdWatchLater></MdWatchLater>;
    }
  };

  return (
    <div className="border ">
      <div className="bg-[#D1A054] p-3 text-[24px] text-white flex justify-center">
        {icon()}
      </div>
      <div className="px-4 pb-4 h-[200px]">
        <div className="bg-[#F3F3F3] text-center h-full flex justify-center items-center">
          <div>
            <h1 className="font-inter font-bold">{info.title}</h1>
            <p className="font-inter pt-2">{info.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
