import ProductList from "../../components/ProductList";

const Books = () => {
  return (
    <section className="w-full flex">
      <div className="filter basis-[25%] bg-primary-500 w-full h-full text-white">
        filter part
      </div>
      <div className="basis-[74%]">
        <ProductList />
      </div>
    </section>
  );
};

export default Books;
