import React from "react";

const Category = () => {
  const categories = [
    { id: "cafe", icon: "fas fa-coffee" },
    { id: "restaurants", icon: "fas fa-utensils" },
    { id: "bakery", icon: "fas fa-bread-slice" },
    { id: "market", icon: "fas fa-shopping-cart" },
    { id: "shopping_mall", icon: "fas fa-store" },
    { id: "hospital", icon: "fas fa-hospital-alt" },
    { id: "pharmacy", icon: "fas fa-pills" },
    { id: "bank", icon: "fas fa-piggy-bank" },
  ];

  const categoryList = categories.map((category, i) => (
    <button className="btn w-1/4 h-14 mt-1 text-lg" key={i} id={Category.id}>
      <i className={category.icon} />
      <p className="text-xs">{category.id}</p>
    </button>
  ));

  return (
    <div className="w-full flex flex-wrap justify-between" id="category">
      {categoryList}
    </div>
  );
};

export default Category;
