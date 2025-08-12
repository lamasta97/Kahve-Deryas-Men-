import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

export default function ProductPage() {
  const { kategoriAdi } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/products/${kategoriAdi}`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [kategoriAdi]);

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
