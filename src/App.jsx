import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup";
import ErrorPage from "./pages/error/ErrorPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <footer>footer</footer>
    </>
  );
}

export default App;
