"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuth = isAuthenticated();
    if (!isAuth) {
      router.push("/");
    }
  }, []);

  return children;
};

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export default PrivateRoute;
