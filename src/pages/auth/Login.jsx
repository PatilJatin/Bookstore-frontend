import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/userContext";
import { useState } from "react";
import styles from "./style";

const Login = () => {
  const { setAuthStatusAndUserProfile, setToken, API } = useUserContext();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/login`, { email, password });
      if (response.status === 200) {
        toast.success("Login successful");
        setToken(response.data.token);
        setAuthStatusAndUserProfile(true, response.data.user);
        history("/");
      } else if (!email || !password) {
        toast.error("Please provide email and password");
      }
    } catch (error) {
      toast.error("Email or Password does not match or exist");
    }
  };
  return (
    <section className="bg-white">
      <div className="flex items-center justify-center  sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => history("/signup")}
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </button>
          </p>
          <form onSubmit={handleLogin} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className={styles.signupLabel}
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className={styles.signupInput}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className={styles.signupLabel}
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className={styles.signupInput}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started{" "}
                  <KeyboardDoubleArrowRightIcon className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
