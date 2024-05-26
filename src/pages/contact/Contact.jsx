import { FiSend } from "react-icons/fi";
import bannerImg from "../../assets/contact/banner.jpg";
import Banner from "../../components/Banner";
import SectionHeader from "../../components/SectionHeader";
import LocationCard from "./LocationCard";
const Contact = () => {
  return (
    <>
      <Banner
        info={{
          img: bannerImg,
          title: "CONTACT US",
          description: "Would you like to try a dish?",
        }}
      ></Banner>
      <section className="max-width">
        <SectionHeader
          info={{ title: "Vist Us", heading: "OUR LOCATION" }}
        ></SectionHeader>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LocationCard
            info={{ title: "PHONE", description: "+38 (012) 34 56 789" }}
          ></LocationCard>
          <LocationCard
            info={{ title: "ADDRESS", description: "+38 (012) 34 56 789" }}
          ></LocationCard>
          <LocationCard
            info={{
              title: "WORKING HOURS",
              description: "Mon - Fri: 08:00 - 22:00",
            }}
          ></LocationCard>
        </div>
      </section>
      <section className="max-width">
        <SectionHeader
          info={{ title: "Send Us a Message", heading: "CONTACT FORM" }}
        ></SectionHeader>

        <form className="bg-[#F3F3F3] p-4 md:p-10 md:w-[80%] mx-auto font-inter rounded-md mt-10">
          <div className="md:flex gap-3 *:flex-1 *:mt-6 *:md:mt-0">
            <div>
              <label>
                name<sup>*</sup>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 mt-1 rounded-md focus:outline-[#D99904]"
              />
            </div>
            <div>
              <label>
                Email<sup>*</sup>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-1 rounded-md focus:outline-[#D99904]"
              />
            </div>
          </div>
          <div className="mt-6">
            <label>
              Phone<sup>*</sup>
            </label>
            <input
              name="number"
              type="number"
              placeholder="Enter your phone number"
              className="w-full p-3 mt-1 rounded-md focus:outline-[#D99904]"
            />
          </div>

          <div className="mt-6">
            <label>
              Message<sup>*</sup>
            </label>
            <textarea
              name="meassage"
              type="text"
              placeholder="Write your message here"
              className="w-full p-3 mt-1 rounded-md focus:outline-[#D99904] resize-none h-[200px]"
            />
          </div>

          <button className="flex mx-auto mt-10 gap-1 items-center  bg-gradient-to-r from-[#835D23] to-[#B58130] px-7 py-2 text-white rounded-md font-inter hover:from-[#181817] hover:to-[#554c3f] duration-500">
            Send Message <FiSend></FiSend>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
