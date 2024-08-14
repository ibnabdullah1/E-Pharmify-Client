const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.7) 100%),url("https://dt-pharmify.myshopify.com/cdn/shop/files/Slider_1.jpg?v=1690617543")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" bg-[#ffffff] min-h-[550px]  max-w-7xl mx-auto px-10 flex items-center"
    >
      <div className="space-y-3 lg:space-y-4">
        <h2
          className="font-bold capitalize text-xl md:text-5xl text-primary"
          style={{ lineHeight: "1.3" }}
        >
          Caring for a better life <br />
          with medication
        </h2>

        <p className=" text-primary w-[70%] pb-4">
          Rhoncus mattis rhoncus urna neque viverra. Pharetra diam sit amet nisl
          suscipit. Ultrices eros in cursus turpis. In nisl nisi scelerisque eu
          ultrices vitae. In massa tempor nec feugiat nisl.
        </p>

        <button className="rounded border-[1.4px] border-primary px-3.5 py-1.5 text-base font-semibold text-primary hover:bg-primary hover:text-white duration-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
