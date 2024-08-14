import StoreProvider from "@/lib/Provider/StoreProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
export const metadata: Metadata = {
  title: "E-Pharmify",
  description: "E-commerce Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="font-questrial">
          <link
            rel="icon"
            href="https://e-pharmify.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9b51d178.png&w=96&q=75"
            sizes="any"
          />
          <>
            <Toaster position="top-center" />
            {children}
          </>
        </body>
      </html>
    </StoreProvider>
  );
}
