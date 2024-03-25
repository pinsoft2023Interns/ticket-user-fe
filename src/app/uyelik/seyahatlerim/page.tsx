"use client";
import React from "react";

function MyTravels() {
  return (
    <>
      <div className="mx-auto p-4 ">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex text-center">
            <h1 className="text-2xl font-semibold">Isparta Petrol Turizm</h1>
            <p className="text-sm text-gray-500">
              28 Mart 2024 Perşembe - 22:00
            </p>
            <p className="text-sm text-gray-500">Denizli (Denizli Otogarı)</p>
            <p className="text-sm text-gray-500">(Peron 9)</p>
            <p className="text-sm text-gray-500">- Keşan (Keşan Otogarı)</p>
          </div>
          <hr className="my-4" />
          <div className="flex text-center">
            <p className="text-lg font-semibold">GÖKTUĞ YUMUŞAK</p>
            <p className="text-sm text-gray-500">YOLCULARIMA KAYITLI</p>
            <p className="text-sm text-gray-500">PNR NO: 1234567</p>
            <p className="text-sm text-gray-500">KOLTUK NO: 1</p>
            <p className="text-sm text-gray-500">TUTAR: 650,00 TL</p>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                AÇIĞA AL
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                DEĞİŞTİR
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                İPTAL ET
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex text-center">
            <p className="text-lg font-semibold">Toplam Tutar:</p>
            <p className="text-lg font-semibold">650,00 TL</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
              SEFER DETAYLARI İÇİN TIKLAYIN
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              BİLETİ İNDİR
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-6 ">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex text-center">
            <h1 className="text-2xl font-semibold">Isparta Petrol Turizm</h1>
            <p className="text-sm text-gray-500">
              28 Mart 2024 Perşembe - 22:00
            </p>
            <p className="text-sm text-gray-500">Denizli (Denizli Otogarı)</p>
            <p className="text-sm text-gray-500">(Peron 9)</p>
            <p className="text-sm text-gray-500">- Keşan (Keşan Otogarı)</p>
          </div>
          <hr className="my-4" />
          <div className="flex text-center">
            <p className="text-lg font-semibold">GÖKTUĞ YUMUŞAK</p>
            <p className="text-sm text-gray-500">YOLCULARIMA KAYITLI</p>
            <p className="text-sm text-gray-500">PNR NO: 1234567</p>
            <p className="text-sm text-gray-500">KOLTUK NO: 1</p>
            <p className="text-sm text-gray-500">TUTAR: 650,00 TL</p>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                AÇIĞA AL
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                DEĞİŞTİR
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                İPTAL ET
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex text-center">
            <p className="text-lg font-semibold">Toplam Tutar:</p>
            <p className="text-lg font-semibold">650,00 TL</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
              SEFER DETAYLARI İÇİN TIKLAYIN
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              BİLETİ İNDİR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTravels;
