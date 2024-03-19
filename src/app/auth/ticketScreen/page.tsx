"use client";
import React, { useEffect, useState } from "react";
import SeatMap from "../../components/SeatMap";
import ExpedetionPopup from "./expedetion popup/page";

function TicketScreen() {
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center items-center">
          <table className="w-[85%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
                    className="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{ticket.companyLogo}</td>
                    <td className="px-6 py-4">{ticket.departureTime}</td>
                    <td className="px-6 py-4">{ticket.seatArrangement}</td>
                    <td className="px-6 py-4">{ticket.price}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleSeatSelection(ticket)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Koltuk Seç
                      </button>
                    </td>
                  </tr>
                  {selectedSeat && selectedSeatData === ticket.id ? (
                    <tr>
                      <td colSpan={5}>
                        <div className="bg-white p-4 border border-gray-300 dark:border-gray-700 shadow-lg">
                          <div
                            onClick={() => setIsPopupActive(true)}
                            className="cursor-pointer"
                          >
                            Sefer detayı
                          </div>
                          <div className="flex items-center justify-between ">
                            <SeatMap seatInfo={seatInfo} />
                            <div className="flex items-center justify-between flex-col gap [20px]  dark:text-blue-500 ">
                              <p>Lütfen Koltuk Seçiniz</p>
                              <button
                                type="button"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
      {isPopupActive && (
        <ExpedetionPopup onClose={() => setIsPopupActive(false)} />
      )}
    </>
  );
}

export default TicketScreen;
