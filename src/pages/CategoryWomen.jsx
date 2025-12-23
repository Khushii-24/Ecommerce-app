import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import CategoryTemplate from "./CategoryTemplate";


// export function CategoryMen() {
//   return <CategoryTemplate category="men" title="Men" />;
// }

const CategoryWomen=()=> {
  return <CategoryTemplate category="women" title="Women"
                 heroImage="/images/category-women.png"
/>;
}
export default CategoryWomen;

// export function CategoryAccessories() {
//   return <CategoryTemplate category="accessories" title="Accessories" />;
// }
