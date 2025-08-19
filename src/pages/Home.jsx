import React from "react";
import { useNavigate } from "react-router-dom";
import MenuLayout from "../components/MenuLayout";

const dummyData = {
  headerImage: "/images/header.jpg",
  cafeName: "KAHVE DERYASI MENÜ",
  categories: [
    { title: "TÜRK KAHVESİ", image: "/images/turkkahvesi.jpeg", key: "turk_kahveleri" },
    { title: "ÇAYLAR", image: "/images/cay.jpeg", key: "caylar" },
    { title: "KAHVALTILAR", image: "/images/kahvalti.png", key: "kahvaltilar" },
    { title: "SOĞUK KAHVELER", image: "/images/sogukkahve.jpeg", key: "soguk_kahveler" },
    { title: "ALTERNATİF SOĞUKLAR", image: "/images/alternatifsoguk.jpeg", key: "alternatif_soguklar" },
    { title: "TATLILAR", image: "/images/tatli.png", key: "tatlilar" },
    { title: "BURGERLER", image: "/images/burger.jpeg", key: "burgerler" },
    { title: "MAKARNALAR", image: "/images/makarna.jpeg", key: "makarnalar" },
    { title: "TAVUK YEMEKLERİ", image: "/images/tavukyemekleri.jpeg", key: "tavuk_yemekleri" },
    { title: "PİZZALAR", image: "/images/pizza.jpeg", key: "pizzalar" },
    { title: "SALATALAR", image: "/images/salata.jpeg", key: "salatalar" },
    { title: "APERATİFLER", image: "/images/patatesler.jpeg", key: "aperatifler" },
    { title: "WAFFLE", image: "/images/waffle.jpeg", key: "waffle" },
    { title: "FONDÜ", image: "/images/fond.jpeg", key: "fondu" },
    { title: "DONDURMALAR", image: "/images/dondurma.jpeg", key: "dondurmalar" },
    { title: "ET YEMEKLERİ", image: "/images/etyemek.jpeg", key: "et_yemekleri" },
    { title: "WRAPLER", image: "/images/wrap.jpeg", key: "wrapler" },
    { title: "MENEMENLER", image: "/images/menemen.jpeg", key: "menemenler" },
    { title: "SANDVİÇLER", image: "/images/sandviç.jpeg", key: "sandvicler" },
    { title: "TOSTLAR", image: "/images/tost.jpeg", key: "tostlar" }
    
    
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
