"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomePage from "./home/page";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Page;
