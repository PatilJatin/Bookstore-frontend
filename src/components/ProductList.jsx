
import { useFilterContext } from "../context/filterContext";
import ProductCart from "./ProductCart";
const ProductList = () => {
  const { filterProducts } = useFilterContext();
  return (
    <div className="product-container flex flex-wrap py-6">
      {filterProducts.map((product) => {
        return <ProductCart key={product._id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
