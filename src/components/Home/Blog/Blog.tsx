import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <div>
      <div className="px-4 pt-8 mx-auto lg:max-w-6xl  lg:px-8">
        <h2 className="font-display text-center text-4xl mb-4 font-semibold text-teal-500 tracking-wide">
          Our Latest News
        </h2>
        <p className="font-sans text-center mb-12 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dolorem.
        </p>
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <div
            style={{ boxShadow: "0px 0px 7px 7px rgba(0, 0, 0, 0.03)" }}
            className="overflow-hidden  duration-300 bg-white rounded "
          >
            <Image
              width={1200}
              height={100}
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-1-720x484.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="mb-3 text-xs font-semibold font-sans tracking-wide uppercase pb-4 border-b border-gray-300 ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
                  aria-label="Category"
                  title="date"
                >
                  28 Jan 2021
                </a>
                <span className="text-gray-600 px-4">4 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-display font-medium pt-3 leading-5 transition-colors duration-200 text-gray-700"
              >
                Travelling Solo Is Awesome
              </a>
              <p className="mb-2 text-gray-700 pb-4">
                Solo travel gives you a chance to listen to your gut and control
                what direction you want to head gut and control.
              </p>
              <button className="bg-teal-300 px-4 flex items-center gap-1 py-1 rounded-sm tracking-wide text-white  transition-all  hover:bg-teal-500 cursor-pointer">
                Read More <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 0px 7px 7px rgba(0, 0, 0, 0.03)" }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded "
          >
            <Image
              width={1200}
              height={100}
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-4-720x484.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="mb-3 text-xs font-semibold font-sans  tracking-wide uppercase pb-4 border-b border-gray-300 ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
                  aria-label="Category"
                  title="date"
                >
                  18 Jun 2021
                </a>
                <span className="text-gray-600 px-4">1 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-display font-medium pt-3 leading-5 transition-colors duration-200 text-gray-700"
              >
                A Beautiful Sunday Morning
              </a>
              <p className="mb-2 text-gray-700 pb-4">
                There seems to be natures healing medicine in fresh air. You and
                your children will notice sweet aromas in the air.
              </p>
              <button className="bg-teal-300 px-4 flex items-center gap-1 py-1 rounded-sm tracking-wide text-white  transition-all  hover:bg-teal-500 cursor-pointer">
                Read More <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 0px 7px 7px rgba(0, 0, 0, 0.03)" }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded "
          >
            <Image
              width={1200}
              height={100}
              src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog9-1024x648.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="mb-3 text-xs font-semibold font-sans  tracking-wide uppercase pb-4 border-b border-gray-300 ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
                  aria-label="Category"
                  title="date"
                >
                  5 SEP 2021
                </a>
                <span className="text-gray-600 px-4">2 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-display font-medium pt-3 leading-5 transition-colors duration-200 text-gray-700"
              >
                Blood Pressure Machine
              </a>
              <p className="mb-2 text-gray-700 pb-4">
                To measure blood pressure, your doctor uses an instrument call a
                sphygmomanometer, which is more often referred to as a blood
                pressure cuff.
              </p>
              <button className="bg-teal-300 px-4 flex items-center gap-1 py-1 rounded-sm tracking-wide text-white  transition-all  hover:bg-teal-500 cursor-pointer">
                Read More <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
