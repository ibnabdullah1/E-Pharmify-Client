"use client";

import Loader from "@/components/Common/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default Page;
