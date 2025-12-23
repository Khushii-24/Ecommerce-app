import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import CategoryTemplate from "./CategoryTemplate";


const CategoryMen=()=> {
return (
    <CategoryTemplate
      category="men"
      title="Men"
    />
  );}
export default CategoryMen;

// export function CategoryWomen() {
//   return <CategoryTemplate category="women" title="Women" />;
// }

// export function CategoryAccessories() {
//   return <CategoryTemplate category="accessories" title="Accessories" />;
// }
