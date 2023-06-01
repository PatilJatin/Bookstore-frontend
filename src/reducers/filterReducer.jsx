/* eslint-disable no-case-declarations */
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const priceArr = [...action.payload].map((ele) => ele.price);
      let maxPrice = Math.max(...priceArr);
      let minPrice = Math.min(...priceArr);
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          minPrice: minPrice,
          price: maxPrice,
        },
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCT":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];
      const { text, category, author, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.name.toLowerCase().includes(text);
        });
      }

      if (category.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.category === category;
        });
      }

      if (author.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.author.toLowerCase() === author.toLowerCase();
        });
      }

      if (price) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.price <= price;
        });
      }

      return {
        ...state,
        filterProducts: tempFilterProduct,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          author: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
export default filterReducer;
