"use client";
import React, { useEffect, useState } from "react";
import api from "../../../../intercepter";
import { useRouter } from "next/navigation";

function MyCoupons() {
  const router = useRouter();
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    if (
      localStorage.getItem("token") === "null" ||
      localStorage.getItem("id") === "null" ||
      !localStorage.getItem("token") ||
      !localStorage.getItem("id")
    ) {
      router.push("/auth/login");
    } else {
      const userInfo = api.get(`/user_account/${localStorage?.getItem("id")}`);
      userInfo.then((response) => {
        setCoupons(response.data.coupons);
      });
    }
  }, []);
  console.log(coupons);
  return (
    <div className="xl:ml-12 flex flex-col">
      <div className="flex gap-4 items-end flex-col md:flex-row mx-auto lg:mx-0">
        <h1 className="text-3xl ">Kuponlarım</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 w-fit mx-auto lg:mx-0">
        {coupons.map((coupon) => (
          <div
            className="border rounded-lg md:py-4 p-8  flex md:flex-row flex-col gap-4 items-center mt-12"
            key={coupon?.id}
          >
            <div className="flex md:gap-12 gap-6">
              <div className="flex flex-col">
                <h3 className="text-xl">{coupon.amount}₺ Kupon</h3>
                <div className="flex md:gap-2 flex-row">
                  <span className="text-sm">alt limit:</span>
                  <span className="text-sm">250TL</span>
                </div>
                <div className="flex md:gap-2 flex-row">
                  <span className="text-sm">Son kullanma tarihi:</span>
                  <span className="text-sm">12/07/2024</span>
                </div>
              </div>
            </div>
            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Yönlendir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCoupons;
