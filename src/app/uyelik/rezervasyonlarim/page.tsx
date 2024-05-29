"use client";
import React, { useEffect } from "react";
import { FaBusSimple } from "react-icons/fa6";
import { useSelector } from "react-redux";

function MyReservations() {
  return (
    <div className="xl:ml-12 flex flex-col">
      <h1 className="text-3xl mx-auto lg:mx-0">Rezervasyonlarım</h1>
      <div className="inline-flex flex-col w-fit mx-auto lg:mx-0">
        <div className="border rounded-lg md:py-4 p-8  flex md:flex-row flex-col gap-4 items-center mt-12 ">
          <div className="flex md:gap-12 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">kalkış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-3 bg-indigo-700"></span>
              <FaBusSimple />
              <span className="h-[2px] w-3 bg-indigo-700"></span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">Varış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <p>Bu bilgi ticketScreen sayfasından gelmektedir.</p>
            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Açığa Al
            </button>
            <button className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Değiştir
            </button>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              İptal Et
            </button>
          </div>
        </div>
        <div className="border rounded-lg md:py-4 p-8  flex md:flex-row flex-col gap-4 items-center mt-12 ">
          <div className="flex md:gap-12 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">kalkış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-3 bg-indigo-700"></span>
              <FaBusSimple />
              <span className="h-[2px] w-3 bg-indigo-700"></span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">Varış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Açığa Al
            </button>
            <button className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Değiştir
            </button>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              İptal Et
            </button>
          </div>
        </div>
        <div className="border rounded-lg md:py-4 p-8  flex md:flex-row flex-col gap-4 items-center mt-12 ">
          <div className="flex md:gap-12 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">kalkış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-3 bg-indigo-700"></span>
              <FaBusSimple />
              <span className="h-[2px] w-3 bg-indigo-700"></span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">Varış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Açığa Al
            </button>
            <button className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Değiştir
            </button>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              İptal Et
            </button>
          </div>
        </div>
        <div className="border rounded-lg md:py-4 p-8  flex md:flex-row flex-col gap-4 items-center mt-12 ">
          <div className="flex md:gap-12 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">kalkış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-3 bg-indigo-700"></span>
              <FaBusSimple />
              <span className="h-[2px] w-3 bg-indigo-700"></span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">İstanbul</h3>
              <div className="flex md:gap-2 flex-col md:flex-row">
                <span className="text-sm">Varış:</span>
                <span className="text-sm">12/07/2024 - 13:50</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Açığa Al
            </button>
            <button className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              Değiştir
            </button>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyReservations;
