import chefService from "../../assets/home/chef-service.jpg";
import menuImg from "../../assets/home/featured.jpg";
import Card from "../../components/Card";
import MenuCard from "../../components/MenuCard";
import SectionHeader from "../../components/SectionHeader";
import Banner from "./Banner";
import OrderSlider from "./OrderSlider";
import ReviewSlider from "./ReviewSlider";
const Home = () => {
  const menu = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Banner></Banner>
      <section className="max-w-7xl mx-auto px-2 md:px-0">
        <SectionHeader
          info={{ title: "From 11:00am to 10:00pm", heading: "ONLINE ORDER" }}
        ></SectionHeader>
        <div className="mt-10 ">
          <OrderSlider></OrderSlider>
        </div>
        <div
          style={{ backgroundImage: `url(${chefService})` }}
          className="flex justify-center items-center md:h-[400px] h-[300px]  mt-14 rounded-lg bg-no-repeat bg-cover bg-center p-2"
        >
          <div className="md:w-[80%] mx-auto bg-white border flex justify-center items-center md:px-24 md:py-14 p-2">
            <div className="*:text-center *:text-balance">
              <h1 className="text-[40px] cinzel-font">Bistro Boss</h1>
              <p className="font-inter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-width">
        <SectionHeader
          info={{ title: "Check it out", heading: "FROM OUR MENU" }}
        ></SectionHeader>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {menu.map((item, id) => (
            <MenuCard key={id}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="font-inter font-bold border-b-[4px] border-[#1F2937] px-7 py-2 rounded-lg hover:bg-[#1F2937] duration-500 hover:text-white">
            View Full Menu
          </button>
        </div>
        <div className="h-[250px] bg-[#151515] text-white font-inter flex justify-center items-center text-[40px] mt-10">
          <h1>Call Us: +88 0192345678910</h1>
        </div>
      </section>
      <section className="max-width">
        <SectionHeader
          info={{ title: "Should Try", heading: "CHEF RECOMMENDS" }}
        ></SectionHeader>
        <div className="grid md:grid-cols lg:grid-cols-3 gap-10 mt-10">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${menuImg})` }}
        className="mt-20 md:h-[600px] bg-no-repeat bg-cover bg-center flex justify-center items-center   bg-blend-multiply bg-[#555454]"
      >
        <div className="max-w-7xl mx-auto px-2 text-white py-10">
          <SectionHeader
            info={{ title: "Check it out", heading: "FROM OUR MENU" }}
          ></SectionHeader>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-14">
            <div>
              <img
                className="w-[80%] mx-auto rounded-md"
                src={menuImg}
                alt=""
              />
            </div>
            <div className="space-y-4 font-inter text-white text-center md:text-start">
              <h3>March 20, 2023</h3>
              <h2>WHERE CAN I GET SOME?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="button">Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-width">
      <SectionHeader
          info={{ title: "What Our Clients Say", heading: "TESTIMONIALS" }}
        ></SectionHeader>
        <div className="mt-10">
           <ReviewSlider></ReviewSlider>
        </div>
      </section>
    </div>
  );
};

export default Home;
