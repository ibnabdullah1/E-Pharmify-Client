import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/NavBar/Header";
import Navbar from "@/components/Navbar/Navbar";
import StoreProvider from "@/lib/Provider/StoreProvider";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Pharmify",
  description: "E-commerce Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <StoreProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <Navbar />
          <div className="px-5 lg:px-0 ">{children}</div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
