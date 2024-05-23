import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/home/01.jpg";
const Banner = () => {
  return (
    <>
      <Carousel >
        <div>
          <img  src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
