const ShopCard = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className=" rounded-md shadow-md cursor-pointer bg-[#F3F3F3] border">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-[250px] dark:bg-gray-500"
      />
      <div className="p-6 space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800">{recipe}</p>
        </div>
        <button className="button  font-inter text-[20px]">add to cart</button>
      </div>
    </div>
  );
};

export default ShopCard;
