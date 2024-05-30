import bannerImg from "../../assets/menu/banner3.jpg";
import Banner from "../../components/Banner";

import SectionHeader from "../../components/SectionHeader";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import TinyBanner from "./TinyBanner";
const Menu = () => {
  const [menu, ] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Banner
        info={{
          img: bannerImg,
          title: "OUR MENU",
          description: "Would you like to try a dish?",
        }}
      ></Banner>
      <section className="max-width">
        <SectionHeader
          info={{ title: "Don't miss", heading: "TODAY'S OFFER" }}
        ></SectionHeader>
        <MenuCategory items={salad}></MenuCategory>
      </section>
      <section className="mt-10">
        <TinyBanner
          title={"DESSERTS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></TinyBanner>
        <div className="max-width">
          <MenuCategory items={pizza}></MenuCategory>
        </div>
      </section>
      <section className="mt-10">
        <TinyBanner
          title={"PIZZA"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></TinyBanner>
        <div className="max-width">
          <MenuCategory items={soup}></MenuCategory>
        </div>
      </section>
      <section className="mt-10">
        <TinyBanner
          title={"SALADS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></TinyBanner>
        <div className="max-width">
          <MenuCategory items={dessert}></MenuCategory>
        </div>
      </section>
      <section className="mt-10">
        <TinyBanner
          title={"SOUPS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></TinyBanner>
        <div className="max-width">
          <MenuCategory items={drinks}></MenuCategory>
        </div>
      </section>
    </div>
  );
};

export default Menu;
