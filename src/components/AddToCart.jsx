import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cartContext";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { _id, stock } = product;
  const [productsQuantity, setProductQuantity] = useState(1);
  const increaseQuantity = () => {
    productsQuantity < stock
      ? setProductQuantity(productsQuantity + 1)
      : setProductQuantity(stock);
  };
  const decreaseQuantity = () => {
    productsQuantity > 1
      ? setProductQuantity(productsQuantity - 1)
      : setProductQuantity(1);
  };
  return (
    <>
      <div className="flex  flex-wrap justify-around items-center">
        <CartAmountToggle
          productsQuantity={productsQuantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          className="basis-[48%]"
        />
        <NavLink
          to={"/cart"}
          onClick={() => addToCart(_id, productsQuantity, product)}
          className="basis-[48%] text-center h-11 w-full rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <button>Add to Cart</button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
