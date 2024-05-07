import React from "react";

function MyCoupons() {
  return (
    <div className="xl:ml-12 flex flex-col">
      <div className="flex gap-4 items-end flex-col md:flex-row mx-auto lg:mx-0">
        <h1 className="text-3xl ">Kuponlarım</h1>
        <span className="text-xl">Puanlarım: 12TL</span>
      </div>
      <div className="inline-flex flex-col w-fit mx-auto lg:mx-0">
        <div className="border rounded-lg md:py-4 p-8  flex md:flex-row flex-col gap-4 items-center mt-12 ">
          <div className="flex md:gap-12 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl">Çorlu Turizim 80 TL kupon</h3>
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
      </div>
    </div>
  );
}

export default MyCoupons;
