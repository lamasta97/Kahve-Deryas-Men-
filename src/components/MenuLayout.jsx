import React from "react";
import "./MenuLayout.css";

const MenuLayout = ({ headerImage, cafeName, categories, onCategoryClick }) => {
  return (
    <div className="menu-layout">
      <div
        className="header-image"
        style={{ backgroundImage: `url(${headerImage})` }}
      />

      <h1 className="cafe-name">{cafeName}</h1>

      <div className="categories">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="category-card"
            style={{ backgroundImage: `url(${cat.image})` }}
            onClick={() => onCategoryClick && onCategoryClick(cat.title)}
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
