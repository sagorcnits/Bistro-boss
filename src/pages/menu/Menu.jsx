import MenuCard from "../../components/MenuCard";
import SectionHeader from "../../components/SectionHeader";
import Banner from "./Banner";
import TinyBanner from "./TinyBanner";

const Menu = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="max-width">
        <SectionHeader
          info={{ title: "Don't miss", heading: "TODAY'S OFFER" }}
        ></SectionHeader>
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
        <div className="text-center mt-10">
            <button className="button2">ORDER YOUR FAVOURITE FOOD</button>
        </div>
      </section>
     <section className="mt-10">
     <TinyBanner title={"DESSERTS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></TinyBanner>
     <div className="max-width">
     <div className="mt-20 grid md:grid-cols-2 gap-10">
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
        <div className="text-center mt-10">
            <button className="button2">ORDER YOUR FAVOURITE FOOD</button>
        </div>
     </div>
     </section>
     <section className="mt-10">
     <TinyBanner title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></TinyBanner>
     <div className="max-width">
     <div className="mt-20 grid md:grid-cols-2 gap-10">
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
        <div className="text-center mt-10">
            <button className="button2">ORDER YOUR FAVOURITE FOOD</button>
        </div>
     </div>
     </section>
     <section className="mt-10">
     <TinyBanner title={"SALADS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></TinyBanner>
     <div className="max-width">
     <div className="mt-20 grid md:grid-cols-2 gap-10">
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
        <div className="text-center mt-10">
            <button className="button2">ORDER YOUR FAVOURITE FOOD</button>
        </div>
     </div>
     </section>
     <section className="mt-10">
     <TinyBanner title={"SOUPS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></TinyBanner>
     <div className="max-width">
     <div className="mt-20 grid md:grid-cols-2 gap-10">
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
        <div className="text-center mt-10">
            <button className="button2">ORDER YOUR FAVOURITE FOOD</button>
        </div>
     </div>
     </section>
     
    </div>
  );
};

export default Menu;
