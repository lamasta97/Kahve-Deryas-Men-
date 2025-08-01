import React from "react";
import MenuLayout from "../components/MenuLayout";

const dummyData = {
  headerImage: "/images/header.jpg",
  cafeName: "HAPPY MOON'S CAFE",
  categories: [
    { title: "KAHVALTILIKLAR", image: "/images/kahvalti.png" },
    { title: "BAŞLANGIÇLAR", image: "/images/baslangic.png" },
    { title: "TATLILAR", image: "/images/tatli.png" },
    { title: "İÇECEKLER", image: "/images/icecek.png" },
  ],
};

const Home = () => (
  <MenuLayout
    headerImage={dummyData.headerImage}
    cafeName={dummyData.cafeName}
    categories={dummyData.categories}
  />
);

export default Home;
