import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bannerImg from "../../assets/shop/banner2.jpg";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import ShopCard from "./ShopCard";
const Shop = () => {
  return (
    <>
     <Banner info={{img:bannerImg, title:"OUR SHOP", description:"Would you like to try a dish?"}}></Banner>
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
