import React from "react";
import moment from "moment";
import "moment/locale/tr";

type Ticket = {
  id: number;
  company: string;
  date: string;
  from: string;
  fromPlatform: string;
  to: string;
  passenger: string;
  pnr: string;
  seat: string;
  price: string;
};

function MyTravels() {
  const tickets: Ticket[] = [
    {
      id: 1,
      company: "Isparta Petrol Turizm",
      date: "28 03 2026 - 22:00",
      from: "Denizli (Denizli Otogarı)",
      fromPlatform: "(Peron 9)",
      to: "Keşan (Keşan Otogarı)",
      passenger: "GÖKTUĞ YUMUŞAK",
      pnr: "1234567",
      seat: "1",  
      price: "650,00 TL",
    },
    {
      id: 2,
      company: "Balıkesir Uludağ Turizm",
      date: "30 04 2023 - 18:00",
      from: "İstanbul (Esenler Otogarı)",
      fromPlatform: "(Peron 10)",
      to: "Çanakkale (Çanakkale Otogarı)",
      passenger: "Gökalp YUMUŞAK",
      pnr: "8321242",
      seat: "12",
      price: "880,00 TL",
    },
    {
      id: 3,
      company: "Balıkesir Uludağ Turizm",
      date: "20 05 2018 - 18:00",
      from: "İstanbul (Esenler Otogarı)",
      fromPlatform: "(Peron 10)",
      to: "Çanakkale (Çanakkale Otogarı)",
      passenger: "Cemal YUMUŞAK",
      pnr: "8321222",
      seat: "12",
      price: "880,00 TL",
    },
  ];

  moment.locale("tr");
  const now = moment();

  return (
    <>
      {tickets.map((ticket) => {
        const ticketDate = moment(ticket.date, "DD MM YYYY - HH:mm", "tr");
        const formattedDate = ticketDate.format("DD MMMM YYYY dddd - HH:mm");

        const isPastDate = ticketDate.isBefore(now);

        return (
          <div key={ticket.id} className="mx-auto p-4 mt-10 ">
            {isPastDate ? (
              <h2>Geçmiş Tarihli Bilet</h2>
            ) : (
              <h2>Gelecek Tarihli Bilet</h2>
            )}
            <div
              className={`rounded-lg shadow-md p-6 ${
                isPastDate
                  ? "bg-stone-300 rounded-lg shadow-md p-6 text-gray-500"
                  : "bg-white"
              }`}
            >
              <div className="flex justify-between text-center">
                <h1 className="text-2xl font-semibold">{ticket.company}</h1>
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <div className="flex gap-6">
                  <p className="text-sm text-gray-500">{ticket.from}</p>
                  <p className="text-sm text-gray-500">{ticket.fromPlatform}</p>
                  <p className="text-sm text-gray-500">{ticket.to}</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex text-center justify-between">
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{ticket.passenger}</p>
                  <p className="text-sm text-gray-500">YOLCULARIMA KAYITLI</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">PNR NO: </p>
                  <p className="text-sm text-gray-500">{ticket.pnr}</p>
                </div>
                <p className="text-sm text-gray-500">
                  KOLTUK NO: {ticket.seat}
                </p>
                <p className="text-sm text-gray-500">TUTAR: {ticket.price}</p>
              </div>
              <hr className="my-4" />
              <div className="flex text-center ">
                <p className="text-lg font-semibold">Toplam Tutar: {ticket.price}</p>
              </div>
              <div className="flex text-center mt-4  justify-between ">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                  SEFER DETAYLARI İÇİN TIKLAYIN
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  BİLETİ İNDİR
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MyTravels;
