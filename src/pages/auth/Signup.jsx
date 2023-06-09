import { useState } from "react";
import axios from "axios";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/userContext";
import styles from "./style";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const history = useNavigate();
  const { API } = useUserContext();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !photo) {
      toast.error("All fields are required");
    } else if (password.length < 8) {
      toast.error("Password should have 8 Characters");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("photo", photo);

    try {
      const response = await axios.post(`${API}/signup`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Successfully registered");
        history("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section className="bg-white">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => history("/signin")}
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </button>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className={styles.signupLabel}>
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className={styles.signupInput}
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className={styles.signupLabel}>
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className={styles.signupInput}
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className={styles.signupLabel}>
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className={styles.signupInput}
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="file" className={styles.signupLabel}>
                    {" "}
                    Profile photo{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className={styles.signupInput}
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={handlePhotoChange}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account{" "}
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

export default Signup;
