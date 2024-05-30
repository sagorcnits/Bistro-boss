

const MenuCard = ({item}) => {
  return (
    <div className="flex gap-6">
      <div className="md:w-[150px] lg:w-[118px] h-[104px] overflow-hidden rounded-tr-[200px] rounded-b-[200px]">
        <img className="w-full" src={item.image} alt="chefService" />
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="cinzel-font font-bold">{item.name} ------------------</h3>
          <p className="text-paragraphColor font-inter">${item.price}</p>
        </div>
        <p>
         {item.recipe}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
