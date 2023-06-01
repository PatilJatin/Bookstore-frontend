import { createContext, useContext, useReducer, useEffect } from "react";
import { useBookContext } from "./bookContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  filters: {
    text: "",
    category: "All",
    author: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterProvider = ({ children }) => {
  const { book } = useBookContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  const updateFilter = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCT" });
  }, [book, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: book });
  }, [book]);

  return (
    <FilterContext.Provider
      value={{ ...state, sorting, updateFilter, clearFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
