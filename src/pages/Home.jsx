import React from "react";
import { useNavigate } from "react-router-dom";
import MenuLayout from "../components/MenuLayout";

const dummyData = {
  headerImage: "/images/header.jpg",
  cafeName: "KAHVE DERYASI MENÜ",
  categories: [
    { title: "KAHVALTILAR", image: "/images/kahvalti.png" },
    { title: "BAŞLANGICLAR", image: "/images/baslangic.png" },
    { title: "TATLILAR", image: "/images/tatli.png" },
    { title: "İÇECEKLER", image: "/images/icecek.png" },
  ],
};

export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (title) => {
    navigate(`/kategori/${title.toLowerCase()}`);
  };

  return (
    <MenuLayout
      headerImage={dummyData.headerImage}
      cafeName={dummyData.cafeName}
      categories={dummyData.categories}
      onCategoryClick={handleCategoryClick}
    />
  );
}
