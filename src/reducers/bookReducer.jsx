/* eslint-disable no-case-declarations */
const BookReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "Top_PRODUCT_DATA":
      const topBooks = action.payload.filter(
        (element) => element.featured === true
      );
      return {
        ...state,
        isLoading: false,
        book: action.payload,
        featureBooks: topBooks,
      };
    case "SET_SINGLE_PRODUCT":
      console.log(action.payload);
      return {
        ...state,
        isSingleLoading: false,
        singleBook: action.payload,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};
export default BookReducer;