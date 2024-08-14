import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  return (
    <div className="group border rounded">
      <div className="w-full min-h-80 bg-blue-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Image
          src={product?.image}
          alt={product?.name}
          width={1200}
          height={100}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>

      {/* name and price */}
      <div className="mt-4 flex justify-between px-2">
        <div>
          <h3 className="text-xl text-gray-900 font-display tracking-wide font-semibold capitalize">
            {product?.name}
          </h3>
        </div>
        <p className="text-xl font-semibold text-teal-600 flex">
          ${product?.price}
        </p>
      </div>

      <div>
        <p className="text-sm mt-1 px-2 text-gray-900 font-sans tracking-wide">
          {product?.brand}
        </p>
      </div>

      {/*  wishlist, quick view, add to cart buttons */}
      <div className="flex justify-between my-4 px-2 items-center">
        <div>
          <button
            className="hover:bg-teal-400 text-gray-900 hover:text-teal-50 p-2 rounded-full transition duration-150 ease-in-out"
            title="Add to Wishlist"
          >
            <svg
              className="w-5 h-5  transition duration-150 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
          <button
            className="hover:bg-teal-400 text-gray-900 hover:text-teal-50 p-2 rounded-full transition duration-150 ease-in-out"
            title="Quick View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>

        <Link href={`products/${product?._id}`}>
          <button className="flex py-2 px-3 text-sm rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
