import orderImg1 from "../../assets/home/slide1.jpg";
import orderImg2 from "../../assets/home/slide2.jpg";
import orderImg3 from "../../assets/home/slide3.jpg";
import orderImg5 from "../../assets/home/slide5.jpg";

const OrderSlider = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="relative *:w-full">
        <img src={orderImg1} alt="order1" />
        <p className="absolute bottom-0 w-full py-4 text-center cinzel-font text-[30px] text-white">
          Salads
        </p>
      </div>
      <div className="relative *:w-full">
        <img src={orderImg2} alt="order1" />
        <p className="absolute bottom-0 w-full py-4 text-center cinzel-font text-[30px] text-white">
          Salads
        </p>
      </div>
      <div className="relative *:w-full">
        <img src={orderImg3} alt="order1" />
        <p className="absolute bottom-0 w-full py-4 text-center cinzel-font text-[30px] text-white">
          Salads
        </p>
      </div>
      <div className="relative *:w-full">
        <img src={orderImg5} alt="order1" />
        <p className="absolute bottom-0 w-full py-4 text-center cinzel-font text-[30px] text-white">
          Salads
        </p>
      </div>
    </div>
  );
};

export default OrderSlider;
