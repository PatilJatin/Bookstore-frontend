import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";

const Books = () => {
  return (
    <section className="w-full flex justify-between bg-primary-300">
      <div className="filter basis-[25%] bg-primary-500 w-full  text-white">
        <Filter />
      </div>
      <div className="basis-[74%]  ">
        <ProductList />
      </div>
    </section>
  );
};

export default Books;
