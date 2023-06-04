import { useFilterContext } from "../context/filterContext";
import FormatPrice from "../helper/FormatPrice";
import { useState } from "react";
const Filter = () => {
  const {
    filters: { text, price, maxPrice, minPrice },
    allProducts,
    updateFilter,
    clearFilter,
  } = useFilterContext();

  const getUniqueData = (data, attribute) => {
    let newVal = data.map((ele) => {
      return ele[attribute];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedAuthor(selectedValue);
  };
  const categoryData = getUniqueData(allProducts, "category");
  const authorData = getUniqueData(allProducts, "author");
  return (
    <div className="text-white bg-primary-500 h-full px-3 py-5 ">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilter}
            className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search book here..."
          />
        </form>
      </div>
      <hr className="my-6 w-[80%] mx-auto " />
      <div className="category text-lg">
        <h2>Category :</h2>
        <div className="flex flex-col">
          {categoryData.map((element, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={element}
                onClick={updateFilter}
                className="font-thin hover:font-semibold transition"
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>
      <hr className="my-6 w-[80%] mx-auto " />
      <div className="author-category">
        <h2 className="mb-3"> Author: </h2>
        <form action="#">
          <select
            name="author"
            id="author"
            onClick={updateFilter}
            onChange={handleSelectChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5  select select-accent"
          >
            {authorData.map((ele, index) => {
              return (
                <option
                  key={index}
                  value={ele}
                  name="author"
                  style={{
                    fontWeight: selectedAuthor === ele ? "bold" : "normal",
                  }}
                >
                  {ele}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <hr className="my-6 w-[80%] mx-auto " />
      <div className="priceFilter">
        <h2 className="mb-3">
          Price : <FormatPrice price={price} />
        </h2>

        <input
          type="range"
          name="price"
          id="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilter}
          className="w-[60%] mx-auto range range-primary"
        />
      </div>
      <hr className="my-6 w-[80%] mx-auto " />

      <div className="w-[70%] mx-auto">
        <button
          onClick={clearFilter}
          type="button"
          className="w-full my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-70 text-white  px-3 py-2  font-bold shadow-sm "
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
