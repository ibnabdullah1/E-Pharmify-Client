import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="bg-white">
      <div className="px-4 py-8 mx-auto lg:max-w-6xl  lg:px-8">
        <h1 className="mx-auto sub-heading">blogs</h1>
        <h2 className="heading text-center">Recent Updation</h2>
        <p className="font-sans text-center mb-12 text-gray-700">
          Accumsan lacus vel facilisis volutpat est velit egestas dui id.
          Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
        </p>
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <BlogCard
            image={
              "https://dt-pharmify.myshopify.com/cdn/shop/articles/Blog-8.jpg?v=1690529646&width=1000"
            }
            title="Enhancing Emergency Preparedness"
          />
          <BlogCard
            image={
              "https://dt-pharmify.myshopify.com/cdn/shop/articles/Blog-7.jpg?v=1690529536&width=1000"
            }
            title="The Importance Of Patient Advocacy"
          />
          <BlogCard
            image={
              "https://dt-pharmify.myshopify.com/cdn/shop/articles/Blog-6.jpg?v=1690529427&width=1000"
            }
            title="Standing With Patients Beyond The Clinic"
          />
          <BlogCard
            image={
              "https://dt-pharmify.myshopify.com/cdn/shop/articles/Blog-5.jpg?v=1690529221&width=1000"
            }
            title="Doctors Driving Multidisciplinary Research"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

const BlogCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="overflow-hidden group transition-shadow duration-300 bg-white rounded ">
      <Image
        width={1200}
        height={100}
        src={image}
        className="object-cover w-full h-[160px]"
        alt=""
      />
      <div className=" py-5 mb-4">
        <p className="text-xs font-semibold font-sans  tracking-wide uppercase ">
          <a
            href="#"
            className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
            aria-label="Category"
            title="date"
          >
            5 SEP 2021
          </a>
          <span className="text-gray-600 px-4">2 comments</span>
        </p>
        <a
          href="#"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 font-semibold pt-3 group-hover:text-primary duration-150 leading-5 text-gray-700"
        >
          {title}
        </a>

        <button className="flex items-center uppercase font-semibold text-sm gap-1 rounded-sm tracking-wide text-secondary  transition-all  cursor-pointer">
          <AiOutlineArrowRight className="p-1 text-2xl bg-primary text-white rounded-full" />{" "}
          Read More{" "}
        </button>
      </div>
    </div>
  );
};
