import { useEffect, useState } from "react";
import FormatPrice from "../../helper/FormatPrice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Order = () => {
  const history = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [orderItems, setOrderItems] = useState([]);
  const [taxAmount, setTaxAmount] = useState(0);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Load products from local storage
    const products = JSON.parse(localStorage.getItem("productCart"));

    // Create order items from products
    const items = products.map((product) => ({
      name: product.name,
      quantity: product.productsQuantity,
      image: product.image,
      price: product.price,
      product: product._id.split("#")[0],
    }));
    // Calculate tax, shipping, and total amounts
    const subTotal = products.reduce(
      (total, product) => total + product.price * product.productsQuantity,
      0
    );
    setTaxAmount(subTotal * 0.1);
    setShippingAmount(products.length * 10);
    setTotalAmount(subTotal + taxAmount + shippingAmount);
    setOrderItems(items);
  }, []);
  const handlePayment = async () => {
    try {
      if (
        !shippingInfo.name ||
        !shippingInfo.address ||
        !shippingInfo.city ||
        !shippingInfo.postalCode ||
        !shippingInfo.state
      ) {
        toast.error("Fill all Fields");
      } else {
        history("/");
        toast.success("Order created successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="mx-auto p-5 my-4 max-w-4xl md:my-6 bg-white">
      <div className="overflow-hidden  rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                      <div>
                        <h3
                          id="contact-info-heading"
                          className="text-lg font-semibold text-gray-900"
                        >
                          Contact information
                        </h3>

                        <div className="mt-4 w-full">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your Name"
                            id="name"
                            name="name"
                            value={shippingInfo.name}
                            onChange={(e) =>
                              setShippingInfo({
                                ...shippingInfo,
                                name: e.target.value,
                              })
                            }
                          ></input>
                        </div>
                      </div>
                      <hr className="my-8" />
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Shipping address
                        </h3>

                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your Address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                value={shippingInfo.address}
                                onChange={(e) =>
                                  setShippingInfo({
                                    ...shippingInfo,
                                    address: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                autoComplete="address-level2"
                                value={shippingInfo.city}
                                onChange={(e) =>
                                  setShippingInfo({
                                    ...shippingInfo,
                                    city: e.target.value,
                                  })
                                }
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="State"
                                autoComplete="address-level1"
                                value={shippingInfo.state}
                                onChange={(e) =>
                                  setShippingInfo({
                                    ...shippingInfo,
                                    state: e.target.value,
                                  })
                                }
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="postalCode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                placeholder="Pinccode"
                                autoComplete="postal-code"
                                value={shippingInfo.postalCode}
                                onChange={(e) =>
                                  setShippingInfo({
                                    ...shippingInfo,
                                    postalCode: e.target.value,
                                  })
                                }
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                        <button
                          onClick={handlePayment}
                          type="button"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Make payment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Product List */}
          <div className="bg-gray-100 px-5 py-6 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {orderItems.map((product) => (
                  <li
                    key={product.product}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                          src={product.image}
                          alt={product.image}
                        />
                      </div>
                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold">{product.name}</p>
                        </div>
                        <p className="mt-4 text-xs font-medium ">x 1</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">
                        <FormatPrice price={product.price} />
                      </p>
                      <button
                        type="button"
                        className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="mt-6 border-gray-200" />

            <ul className="mt-6 space-y-3">
              <li className="flex items-center justify-between text-gray-900">
                <p className="text-sm font-medium ">Total</p>
                <p className="text-sm font-bold ">
                  <FormatPrice price={totalAmount} />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
