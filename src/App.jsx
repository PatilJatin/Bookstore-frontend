import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup";
import ErrorPage from "./pages/error/ErrorPage";
import Navbar from "./components/Navbar";
import Books from "./pages/books/Books";
import SingleBook from "./components/SingleBook";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/book/:id" element={<SingleBook />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
