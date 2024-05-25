
import bannerImg from "../../assets/menu/banner3.jpg";


const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${bannerImg})`}} className="bg-center bg-cover bg-no-repeat md:h-[600px] h-[400px] flex justify-center items-center">
            <div className="w-[80%] flex justify-center items-center py-10 md:py-32 mt-14 md:mt-28 bg-blend-multiply bg-[#15151599] text-center text-white rounded-lg">
                <div>
                     <h1 className="text-[40px] md:text-[50px] cinzel-font font-bold">OUR MENU</h1>
                     <p>Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;