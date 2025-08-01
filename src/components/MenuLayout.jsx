import React from "react";
import "./MenuLayout.css";

const MenuLayout = ({ headerImage, cafeName, categories }) => {
  return (
    <div className="menu-layout">
      {/* Header Görsel */}
      <div
        className="header-image"
        style={{ backgroundImage: `url(${headerImage})` }}
      />

      {/* Kafe İsmi */}
      <h1 className="cafe-name">{cafeName}</h1>

      {/* Kategori Kartları */}
      <div className="categories">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="category-card"
            style={{ backgroundImage: `url(${cat.image})` }}
          >
            <div className="overlay">
              <h2 className="category-title">{cat.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLayout;
