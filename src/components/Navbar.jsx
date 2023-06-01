import { NavLink } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useUserContext } from "../context/userContext";
import { useCartContext } from "../context/cartContext";
const Navbar = () => {
  const { isAuthenticated, userProfile, handleLogout } = useUserContext();
  const { total_item } = useCartContext();
 
  return (
    <nav className="flex justify-between bg-primary-800 text-white px-3 py-6">
      <NavLink to={"/"}>
        <h2 className="font-extrabold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          #BookHaven
        </h2>
      </NavLink>
      <div className="nav-list basis-[50%]">
        <ul className="w-full flex justify-evenly items-center ">
          <li className=" hover:scale-105 hover:font-semibold transition-all duration-200 delay-100 text-lg font-medium">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className=" hover:scale-105 hover:font-semibold transition-all duration-200 delay-100 text-lg font-medium">
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li className=" hover:scale-105 hover:font-semibold transition-all duration-200 delay-100 text-lg font-medium">
            <NavLink to={"/books"}>Books</NavLink>
          </li>
          <li className=" hover:scale-105 hover:font-semibold transition-all duration-200 delay-100 text-lg font-medium">
            {isAuthenticated ? (
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink to={"/signin"}>Login</NavLink>
            )}
          </li>

          {isAuthenticated && (
            <li className="relative hover:scale-105 hover:font-semibold transition-all duration-200 delay-100 text-lg font-medium">
              <img
                src={userProfile?.photo?.secure_url}
                alt="user_photo"
                className="h-11 w-11 rounded-full object-cover "
              />
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-1 ring-white" />
            </li>
          )}
          <li>
            <NavLink
              to={"/cart"}
              className={
                "relative hover:scale-105 hover:font-semibold transition-all duration-200 delay-100 text-lg font-medium"
              }
            >
              <ShoppingBagIcon style={{ width: "2.8rem", height: "2.8rem" }} />
              <span className="absolute top-[-0.4rem] right-[-0.2rem] z-10 bg-yellow-300 text-black rounded-full w-6 h-6 text-center text-[0.8rem]">
                {total_item}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
