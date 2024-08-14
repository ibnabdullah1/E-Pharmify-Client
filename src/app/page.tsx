"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "./login/page";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Page;
