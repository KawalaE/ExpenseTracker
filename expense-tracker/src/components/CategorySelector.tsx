import React from "react";
import { FormData } from "./Form";
import { categoryName } from "./Form";

interface Props {
  categories: FormData[categoryName][];
  selectHandler: (data: FormData[categoryName] | "All categories") => void;
}
const CategorySelector = ({ selectHandler, categories }: Props) => {
  return (
    <select
      onChange={(e) => selectHandler(e.target.value)}
      className="form-select mb-5"
    >
      <option value="All categories">All categories</option>
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default CategorySelector;
