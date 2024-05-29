"use client";
import React, { useEffect, useState } from "react";
import { WriteStream } from "tty";
import SeatMap from "../components/SeatMap";
import ExpedetionPopup from "./expedetion_popup/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function TicketScreen() {
  const router = useRouter();
  const [selectedSeat, setSelectedSeat] = useState(false);
  const [selectedSeatImage, setSelectedSeatImage] = useState("");
  const [selectedSeatData, setSelectedSeatData] = useState(0);
  const [showSeatMap, setShowSeatMap] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const seatInfo = [
    { seatLength: 38, busType: "2+1" },
    //   { seatLength: 48, busType: "2+2" },
    //   { seatLength: 41, busType: "2+1" },
  ];

  const handleSeatSelection = (ticket) => {
    setSelectedSeat(true);
    setSelectedSeatData(ticket.id);
    setShowSeatMap(true);
  };

  useEffect(() => {
    console.log("selectedSeatData", selectedSeatData);
  }, [selectedSeatData]);

  const busSeats = Array.from({ length: 45 }, (_, index) => index + 1);

  const ticketData = [
    {
      id: 1,
      companyLogo: "Firma Logosu 1",
      departureTime: "Sefer Saati 1",
      seatArrangement: "Otobüsteki koltuk düzeni 2+1",
      price: "$50",
    },
    {
      id: 2,
      companyLogo: "Firma Logosu 2",
      departureTime: "Sefer Saati 2",
      seatArrangement: "Otobüsteki koltuk düzeni 2+2",
      price: "$40",
    },
    {
      id: 3,
      companyLogo: "Firma Logosu 3",
      departureTime: "Sefer Saati 3",
      seatArrangement: "Otobüsteki koltuk düzeni 2+1",
      price: "$100",
    },
    {
      id: 4,
      companyLogo: "Firma Logosu 4",
      departureTime: "Sefer Saati 4",
      seatArrangement: "Otobüsteki koltuk düzeni 2+1",
      price: "$200",
    },
  ];

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        setIsPopupActive(false);
        setSelectedSeat(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <>
      <div>
        <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-x-6 py-6 lg:py-8 ">
          <div className="flex w-full rounded-xl border  m-2 overflow-auto">
            <table className="text-sm  text-left rtl:text-right text-gray-500 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr className="bg-indigo-600 text-white">
                  <th scope="col" className="px-6 py-3">
                    Firma Logosu
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sefer Saati
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Otobüsteki Koltuk Düzeni
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bilet Fiyatı
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Koltuk Seç
                  </th>
                </tr>
              </thead>
              <tbody>
                {ticketData.map((ticket) => (
                  <React.Fragment key={ticket.id}>
                    <tr
                      onClick={() => handleSeatSelection(ticket)}
                      className=" h-16 cursor-pointer gap-14 text-base  border-b bg-white"
                    >
                      <td className="px-6 py-4">{ticket.companyLogo}</td>
                      <td className="px-6 py-4">{ticket.departureTime}</td>
                      <td className="px-6 py-4">{ticket.seatArrangement}</td>
                      <td className="px-6 py-4">{ticket.price}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleSeatSelection(ticket)}
                          className="font-medium text-indigo-600  hover:underline"
                        >
                          Koltuk Seç
                        </button>
                      </td>
                    </tr>

                    {selectedSeat && selectedSeatData === ticket.id ? (
                      <tr>
                        <td className="h-96 bg-gray-200 " colSpan={5}>
                          <div className="bg-white p-4 border border-gray-300 shadow-lg">
                            <div
                              onClick={() => setIsPopupActive(true)}
                              className="cursor-pointer text-xl font-bold pb-4"
                            >
                              Sefer detayı
                            </div>
                            <div className="flex justify-center gap-8 pb-6">
                              <div className="flex items-center gap-4">
                                <Image
                                  src="/greenSeat.svg"
                                  alt="seat"
                                  className="rotate-90"
                                  width={40}
                                  height={40}
                                />
                                <h3>Boş Koltuk</h3>
                              </div>
                              <div className="flex items-center gap-4">
                                <Image
                                  src="/blueSeat.svg"
                                  alt="seat"
                                  className="rotate-90"
                                  width={40}
                                  height={40}
                                />
                                <h3>Erkek - Dolu Koltuk</h3>
                              </div>
                              <div className="flex items-center gap-4">
                                <Image
                                  src="/pinkSeat.svg"
                                  alt="seat"
                                  className="rotate-90"
                                  width={40}
                                  height={40}
                                />
                                <h3>Kadın - Dolu Koltuk</h3>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                              <SeatMap seatInfo={seatInfo} />
                              <div className="flex items-center justify-between flex-col gap [20px]   ">
                                <button
                                  type="button"
                                  className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                  onClick={() => router.push("/payment")}
                                >
                                  Onayla ve devam et
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() => setSelectedSeat(false)}
                              className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                              Kapat
                            </button>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isPopupActive && (
        <ExpedetionPopup onClose={() => setIsPopupActive(false)} />
      )}
    </>
  );
}

export default TicketScreen;

/*
<div
              className={`relative flex-col    ${
                isBackVisible ? "rotate-180" : ""
              }`}
            >
              <img
                className="w-full h-auto"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                alt="front credit card"
              />
              <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                <p className="number mb-5 sm:text-xl">
                  {cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"}
                </p>
                <div className="flex flex-row justify-between">
                  <p>{cardName !== "" ? cardName : "Card holder"}</p>

                  <div>
                    <span>{expDate.split("/")[0]}</span>
                    <span>/</span>
                    <span>{expDate.split("/")[1]}</span>
                  </div>
                </div>
              </div>
              <div
                className={`back bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12 rotate-180 transition-transform ${
                  isBackVisible ? "opacity-100" : "opacity-0"
                } z-10`}
              >
                <div className="flex w-full absolute items-center justify-end">
                  <img
                    className="w-full h-auto"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                    alt="back credit card"
                  />
                  <h3 className="flex text-3xl opacity-100 absolute right-20 z-50 text-white">
                    {ccv}
                  </h3>
                </div>
              </div>
            </div>
            */
