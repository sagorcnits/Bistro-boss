import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bannerImg from "../../assets/shop/banner2.jpg";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import useMenu from "../../hooks/useMenu";
import ShopCard from "./ShopCard";
const Shop = () => {
  const categories = ["Salad", "pizza", "soups","desserts","drinks"]
  const initialIndex = categories.indexOf("pizza")
  const [tabIndex,setTabIndex] = useState(initialIndex)
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <Banner
        info={{
          img: bannerImg,
          title: "OUR SHOP",
          description: "Would you like to try a dish?",
        }}
      ></Banner>
      <section className="max-width font-inter">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList >
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {salad.slice(0, 4)?.map((item, id) => (
                <ShopCard key={id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {pizza.slice(0, 4)?.map((item, id) => (
                <ShopCard key={id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {soup.slice(0, 4)?.map((item, id) => (
                <Card key={id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {dessert.slice(0, 4)?.map((item, id) => (
                <ShopCard key={id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {drinks.slice(0, 4)?.map((item, id) => (
                <ShopCard key={id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default Shop;
