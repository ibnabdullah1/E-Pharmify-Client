import Offers from "@/components/AdsCard/AdsCard";
import Banner from "@/components/Banner/Banner";
import Brands from "@/components/Common/Brands";
import Blog from "@/components/Home/Blog/Blog";
import VendorCTA from "@/components/Home/VendorCTA/VendorCTA";
import Reviews from "@/components/Reviews/Reviews";
import NewsLetter from "./services/NewsLetter";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Offers />
      <VendorCTA />
      <Blog />
      <Reviews />
      <Brands />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
