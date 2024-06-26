import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bannerImg from "../../assets/shop/banner2.jpg";
import Banner from "../../components/Banner";

import Card from "../../components/Card";
import useMenu from "../../hooks/useMenu";
const Shop = () => {
  const categories = ["Salad", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  // console.log(category)
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, loading] = useMenu();
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
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loading ? (
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto"></div>
              ) : (
                salad
                  .slice(0, 4)
                  ?.map((item, id) => <Card key={id} item={item}></Card>)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loading ? (
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto"></div>
              ) : (
                pizza
                  .slice(0, 4)
                  ?.map((item, id) => <Card key={id} item={item}></Card>)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loading ? (
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto"></div>
              ) : (
                soup
                  .slice(0, 4)
                  ?.map((item, id) => <Card key={id} item={item}></Card>)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loading ? (
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto"></div>
              ) : (
                dessert
                  .slice(0, 4)
                  ?.map((item, id) => <Card key={id} item={item}></Card>)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loading ? (
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto"></div>
              ) : (
                drinks
                  .slice(0, 4)
                  ?.map((item, id) => <Card key={id} item={item}></Card>)
              )}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default Shop;
