/* eslint-disable no-unused-vars */

import axios from "axios";
import { createContext } from "react";
import { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/bookReducer";
import { useUserContext } from "./userContext";

const BookContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  book: [],
  featureBooks: [],
  isSingleLoading: false,
  singleBook: {},
};

const BookProvider = ({ children }) => {
  const { API } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBooks = async (URL) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(URL);
      const books = await response?.data;
      dispatch({ type: "Top_PRODUCT_DATA", payload: books.data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleBook = async (URL) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(URL);
      console.log(response?.data);
      const singleBook = await response?.data?.book;
      console.log(singleBook);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleBook });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getBooks(API + "/getAllBooks");
  }, []);

  return (
    <BookContext.Provider value={{ ...state, getSingleBook }}>
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = () => {
  return useContext(BookContext);
};
export { BookProvider, useBookContext };
