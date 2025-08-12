import React from "react";
import { useNavigate } from "react-router-dom";
import MenuLayout from "../components/MenuLayout";

const dummyData = {
  headerImage: "/images/header.jpg",
  cafeName: "KAHVE DERYASI MENÜ",
  categories: [
    { title: "KAHVALTILAR", image: "/images/kahvalti.png", key: "kahvaltilar" },
    { title: "BAŞLANGIÇLAR", image: "/images/baslangic.png", key: "baslangiclar" },
    { title: "SOĞUK KAHVELER", image: "/images/sogukkahve.jpeg", key: "soguk_kahveler" },
    { title: "ALTERNATİF SOĞUKLAR", image: "/images/alternatifsoguk.jpeg", key: "alternatif_soguklar" },
  
    { title: "TATLILAR", image: "/images/tatli.png", key: "tatlilar" },
    { title: "WAFFLE", image: "/images/waffle.jpeg", key: "waffle" },
    { title: "FONDÜ", image: "/images/fondu.png", key: "fondu" },
    { title: "DONDURMALAR", image: "/images/dondurmalar.png", key: "dondurmalar" },
  ],
};


export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (key) => {
    navigate(`/kategori/${key}`);
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
