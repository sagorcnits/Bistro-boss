import SectionHeader from "../../components/SectionHeader";
import Banner from "./Banner";
import OrderSlider from "./OrderSlider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="max-w-7xl mx-auto px-2 md:px-0">
          <SectionHeader info={{title:"From 11:00am to 10:00pm", heading:"ONLINE ORDER"}}></SectionHeader>
          <div className="mt-10 ">
              <OrderSlider></OrderSlider>
          </div>
      </section>
    </div>
  );
};

export default Home;
