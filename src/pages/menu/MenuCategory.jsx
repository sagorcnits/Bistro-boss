import { Link } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import useMenu from "../../hooks/useMenu";

const MenuCategory = ({ items }) => {
  const [menu,loading] = useMenu();
  console.log(loading);
  return (
    <>
      {loading ? (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto"></div>
      ) : (
        <>
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {items.slice(0, 6)?.map((item, id) => (
              <MenuCard key={id} item={item}></MenuCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={`/shop`}>
              <button className="button2">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default MenuCategory;
