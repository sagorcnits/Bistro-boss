import chefService from "../../assets/home/chef-service.jpg";
import SectionHeader from "../../components/SectionHeader";
import Banner from "./Banner";
import OrderSlider from "./OrderSlider";
const Home = () => {
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
        <div style={{backgroundImage:`url(${chefService})`}} className="flex justify-center items-center md:h-[400px] h-[300px]  mt-14 rounded-lg bg-no-repeat bg-cover bg-center p-2">
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
    </div>
  );
};

export default Home;
