import cardImg from "../assets/menu/pizza-bg.jpg";

const Card = () => {
  return (
    <div className=" rounded-md shadow-md cursor-pointer bg-[#F3F3F3]">
      <img
        src={cardImg}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-[250px] dark:bg-gray-500"
      />
      <div className="p-6 space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">Caeser Salad</h2>
          <p className="dark:text-gray-800">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <button className="button  font-inter text-[20px]">add to cart</button>
      </div>
    </div>
  );
};

export default Card;
