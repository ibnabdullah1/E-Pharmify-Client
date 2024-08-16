"use client";
import Loader from "@/components/Common/Loader";
import StoreProvider from "@/lib/Provider/StoreProvider";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/NavBar/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./globals.css";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <Navbar />
          <div className="px-5 lg:px-0">{loading ? <Loader /> : children}</div>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
};

export default CommonLayout;
