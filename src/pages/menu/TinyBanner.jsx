import chefImg from "../../assets/home/chef-service.jpg";

const TinyBanner = ({title,description}) => {
    return (
        <div style={{backgroundImage:`url(${chefImg})`}} className="bg-center bg-cover bg-no-repeat md:h-[500px] h-[400px] flex justify-center items-center">
            <div className="w-[80%] flex justify-center items-center py-10 md:py-32  bg-blend-multiply bg-[#15151599] text-center text-white rounded-lg">
                <div>
                     <h1 className="text-[40px] md:text-[50px] cinzel-font font-bold">{title}</h1>
                     <p className="text-balance">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TinyBanner;