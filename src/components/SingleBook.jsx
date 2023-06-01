import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookContext } from "../context/bookContext";
import ImageSlider from "./ImageSlider";
import FormatPrice from "../helper/FormatPrice";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";
// import AddToCart from "./AddToCart";
import { useUserContext } from "../context/userContext";

const product = {
  _id: "647825e24c5fc81b2a4a91e7",
  name: "One Piece, Vol. 101",
  price: 799,
  description:
    "Join Monkey D. Luffy and his swashbuckling crew in their search for the ultimate treasure, One Piecee\n",
  images: [
    {
      id: "Books/tolm3ewaodxnjpwpe4er",
      secure_url:
        "https://res.cloudinary.com/ddiq7elh2/image/upload/v1685595612/Books/tolm3ewaodxnjpwpe4er.jpg",
      _id: "647825e24c5fc81b2a4a91e8",
    },
    {
      id: "Books/ppdp6a962cadjm1hsjba",
      secure_url:
        "https://res.cloudinary.com/ddiq7elh2/image/upload/v1685595615/Books/ppdp6a962cadjm1hsjba.jpg",
      _id: "647825e24c5fc81b2a4a91e9",
    },
  ],
  category: "Comics",
  author: "Eiichiro Oda",
  stock: 30,
  featured: true,
  createdAt: "2023-06-01T05:00:18.697Z",
  __v: 0,
};

const SingleBook = () => {
  const { getSingleBook, singleBook } = useBookContext();
  const { API } = useUserContext();
  const { id } = useParams();
  const { description, images, name, price, stock } = singleBook;

  useEffect(() => {
    getSingleBook(`${API}/getOneBook/${id}`);
  }, []);

  return (
    <div className="py-6 bg-gray-200 text-black overflow-x-hidden">
      <div className="product-container bg-gray-50  rounded-2xl w-[80%] mx-auto flex flex-wrap justify-around py-20">
        <div className="image-container  basis-[50%] flex justify-center py-10">
          <ImageSlider images={images} />
        </div>
        <div className="product-details basis-[40%] space-y-3">
          <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
            {name}
          </h2>
          <div className="Product-price font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            MRP :
            <del className="mx-1">
              <FormatPrice
                price={
                  price + (Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000)
                }
              />
            </del>
          </div>
          <p className="text-heading pr-2 font-bold md:pr-0 text-lg lg:pr-2 2xl:pr-0 ">
            Deal of the Day:{" "}
            <span>
              <FormatPrice price={price} />
            </span>
          </p>
          <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
            <p className="text-lg font-medium">Description </p>
            {description}
          </p>

          <div className="product-avaliblity">
            <p
              className={`${
                stock > 0 ? "bg-green-600 " : "bg-red-600 "
              } text-lg font-semibold w-[40%]  text-center rounded-md text-white mx-auto`}
            >
              {stock > 0 ? "Available" : "Not Available"}
            </p>
          </div>
          <hr className="w-[90%] mx-auto my-3" />
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
