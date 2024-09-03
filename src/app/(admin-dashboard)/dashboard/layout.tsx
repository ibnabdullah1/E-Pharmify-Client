"use client";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import StoreProvider from "@/lib/Provider/StoreProvider";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "../../(site)/globals.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <html>
      <head>
        <title>E-Pharmify</title>
      </head>
      <body>
        <StoreProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="relative bg-gray-50 min-h-screen lg:flex font-questrial gap-5">
            <Sidebar isActive={isActive} />
            <div className="flex-1 bg-gray-50 lg:ml-64">
              <DashboardNavbar
                handleToggle={handleToggle}
                isActive={isActive}
              />
              <div className="max-w-4xl mx-auto py-14 px-5 md:px-8 lg:px-0">
                {children}
              </div>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
};

export default DashboardLayout;
