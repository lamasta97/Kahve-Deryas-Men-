import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]/g, "");
}

export default function ProductPage() {
  const { kategoriAdi } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const key = normalizeString(kategoriAdi);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/products/${key}`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [key]);

  const headerImage = "/images/header.jpg";

  return (
    <div className="menu-layout">
      <div
        className="header-image"
        style={{ backgroundImage: `url(${headerImage})` }}
      />
      <h1 className="cafe-name">{kategoriAdi.toUpperCase()}</h1>

      <div className="categories">
        {loading && <p style={{ color: "#aaa", textAlign: "center", marginTop: "2rem" }}>Yükleniyor...</p>}
        {!loading && products.length === 0 && (
          <p style={{ color: "#aaa", textAlign: "center", marginTop: "2rem" }}>
            Bu kategoride ürün bulunamadı.
          </p>
        )}
        {!loading && products.map((item, idx) => (
          <div
            key={idx}
            className="category-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay">
              <h2 className="category-title">{item.title}</h2>
              <p className="product-description">{item.description}</p>
              <div className="product-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
