import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../utils/api/getAllCategories";

const Category = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
   
    props.onCategoryChange(event.target.value);
  };

  return (
    <div className="pb-2 ml-3 mb-2">
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="bg-white w-full text-xs text-grey-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg"
      >
        <option value="">Select the category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
