"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      router.push("/auth/login");
    }
  }, [router]);

  return null;
};

export default useAuthGuard;
