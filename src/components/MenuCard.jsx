import menu1 from "../assets/home/slide1.jpg";


const MenuCard = () => {
  return (
    <div className="flex gap-6">
      <div className="md:w-[150px] lg:w-[118px] h-[104px] overflow-hidden rounded-tr-[200px] rounded-b-[200px]">
        <img className="w-full" src={menu1} alt="chefService" />
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="cinzel-font font-bold">ROAST DUCK BREAST ------------------</h3>
          <p className="text-paragraphColor font-inter">$14.5</p>
        </div>
        <p>
          Roasted duck breast (served pink) with gratin potato and a griottine
          cherry sauce
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
