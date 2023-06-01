import { NavLink } from "react-router-dom";
import Book from "../../components/canvas/Books";
import SetUp from "../../components/canvas/SetUp";

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="hero relative w-[100vw] h-[90vh]  bg-gradient-to-b from-hero-bg  to-indigo-500">
        <h2 className="text-4xl absolute font-extrabold top-20 text-white left-6">
          &lt; Discover our captivating collection of books! / &gt;
        </h2>
        <Book />
      </div>
      <div className="hero relative w-[100vw] h-[100vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="text-4xl absolute font-extrabold top-20 text-white right-3 w-[600px]">
          &lt; Embark on a Literary Voyage, Explore Endless Worlds and
          Captivating Stories. Click Here to Ignite Your Passion for Books! &gt;
        </h2>
        <NavLink
          to={"/books"}
          className="absolute hover:bg-primary-400 top-[50%] right-40 text-xl font-extrabold text-white bg-primary-800 py-3 px-6  rounded-3xl z-10"
        >
          Explore Now
        </NavLink>
        <SetUp />
      </div>
    </section>
  );
};

export default Home;
