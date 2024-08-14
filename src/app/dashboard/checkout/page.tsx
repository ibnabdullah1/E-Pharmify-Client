"use client";
import { districts, divisions } from "@/data/dummyData";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useOrderMutation } from "@/redux/features/order/orderApi";
import { RootState } from "@/redux/features/store";
import { District, FormData } from "@/types/type";
import { formatDate } from "@/utils/dateFormet";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    division: "",
    district: "",
    subDistrict: "",
    phone: "",
  });

  const [availableDistricts, setAvailableDistricts] = useState<District[]>([]);
  const [availableUpazilas, setAvailableUpazilas] = useState<string[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [order] = useOrderMutation();
  const dispatch = useDispatch();

  const { userEmail }: any = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );
  const router = useRouter();

  const total =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5;
  const orderId = (Math.random() + 1).toString(36).substring(2);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "division") {
      setAvailableDistricts(districts[value] || []);
      setFormData((prev) => ({
        ...prev,
        district: "",
        subDistrict: "",
      }));
      setAvailableUpazilas([]);
    }

    if (name === "district") {
      const selectedDistrict = availableDistricts.find((d) => d.name === value);
      setAvailableUpazilas(selectedDistrict ? selectedDistrict.upazilas : []);
      setFormData((prev) => ({ ...prev, subDistrict: "" }));
    }
  };

  const date = new Date();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cartItems.length > 0) {
      const orderData = {
        ...formData,
        cartItems,
        email: userEmail,
        status: "shipping",
        total,
        orderId,
        orderDate: formatDate(date),
        paymentMethod: "Cash On Delivery",
      };
      const res = await order(orderData).unwrap();

      if (res.success) {
        dispatch(clearCart());
        toast.success(res.message);
        router.push("/dashboard/order-history");
      } else if (res.status === 400) {
        return toast.error("Something went wrong");
      }
    } else {
      toast.error("Your cart is Empty");
    }
  };

  return (
    <div className="">
      <div className="w-full max-w-4xl mx-auto md:px-8">
        <div className="bg-gray-50 p-8 rounded-lg  border">
          <h1 className=" text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Manage Address and Payment Information
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6 space-y-3">
              <h2 className=" text-md md:text-xl font-semibold text-gray-700 mb-2">
                Shipping Address :
              </h2>

              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border py-2 px-3"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border py-2 px-3"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={userEmail}
                  disabled
                  className="w-full bg-gray-300 rounded-lg border py-2 px-3 text-gray-400"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-md md:text-xl font-semibold text-gray-700 mb-2">
                Location Information :
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="division"
                    className="block text-gray-700 mb-1"
                  >
                    Division
                  </label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3"
                    required
                  >
                    <option value="">Select Division</option>
                    {divisions?.map((division: any) => (
                      <option key={division.id} value={division.name}>
                        {division.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="district"
                    className="block text-gray-700 mb-1"
                  >
                    District
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3"
                    required
                    disabled={!formData.division}
                  >
                    <option value="">Select District</option>
                    {availableDistricts?.map((district) => (
                      <option key={district.id} value={district.name}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subDistrict"
                    className="block text-gray-700 mb-1"
                  >
                    Sub-District
                  </label>
                  <select
                    id="subDistrict"
                    name="subDistrict"
                    value={formData.subDistrict}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3"
                    required
                    disabled={!formData.district}
                  >
                    <option value="">Select Sub-District</option>
                    {availableUpazilas.map((upazila, index) => (
                      <option key={index} value={upazila}>
                        {upazila}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <h3 className=" text-md md:text-xl font-semibold text-gray-700 mb-2">
                Total Cost:{" "}
                <span className="text-primary">
                  ${cartItems.length === 0 ? "0" : total}.00
                </span>
              </h3>
              <button
                type="submit"
                disabled={cartItems.length === 0}
                className={`${
                  cartItems.length === 0
                    ? "bg-gray-300 text-gray-400 px-4 py-2 rounded-lg "
                    : "bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                } `}
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
