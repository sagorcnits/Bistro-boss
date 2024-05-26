import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bannerImg from "../../assets/shop/banner2.jpg";
import Card from "../../components/Card";
import ShopCard from "./ShopCard";
const Shop = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-center bg-cover bg-no-repeat md:h-[600px] h-[400px] flex justify-center items-center"
      >
        <div className="w-[80%] flex justify-center items-center py-10 md:py-32 mt-14 md:mt-28 bg-blend-multiply bg-[#15151599] text-center text-white rounded-lg">
          <div>
            <h1 className="text-[40px] md:text-[50px] cinzel-font font-bold">
              OUR SHOP
            </h1>
            <p>Would you like to try a dish?</p>
          </div>
        </div>
      </div>
      <section className="max-width">
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
             <ShopCard></ShopCard>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default Shop;
