import React from "react";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import { useBookContext } from "../../context/bookContext";
import Loading from "../../components/Loading";

const Books = () => {
  const { isLoading } = useBookContext();

  return (
    <section className="w-full flex justify-between bg-primary-300">
      <div className="filter basis-[25%] bg-primary-500 w-full text-white">
        <Filter />
      </div>
      <div className="basis-[74%] relative">
        {isLoading ? <Loading /> : <ProductList />}
      </div>
    </section>
  );
};

export default Books;
