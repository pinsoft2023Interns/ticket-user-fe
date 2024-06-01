"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/tr";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Ticket {
  id: number;
  reservationTimestamp: string;
  seatInfo: string;
  price: number;
  bnsIds: string;
  pnrNumber: string;
  departureDate: string;
  name: string;
}

function MyTravels() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ticket-web-be-6ogu.onrender.com/busnavigation');
        const data = response.data;

        const ticketsWithDepartureDates = data.reduce((acc: Ticket[], busNav: any) => {
          const departureDate = busNav.busNavStation.length > 0 ? busNav.busNavStation[0].departureDate : null;
          const ticketsWithDates = busNav.tickets.map((ticket: Ticket) => ({
            ...ticket,
            departureDate,
          }));
          return [...acc, ...ticketsWithDates];
        }, []);

        setTickets(ticketsWithDepartureDates);
      } catch (error) {
        console.error('API isteği sırasında hata oluştu:', error);
      }
    };

    fetchData();
  }, []);

  moment.locale("tr");
  const now = moment();

  return (
    <>
      {tickets.map((ticket) => {
        const ticketDate = moment(ticket.departureDate,);
        const formattedDate = ticketDate.format("DD MMMM YYYY dddd - HH:mm");

        const isPastDate = ticketDate.isBefore(now);

        return (
          <div key={ticket.id} className="mx-auto p-4 mt-10">
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
              <h1 className="text-2xl font-semibold">{ticket.id}</h1>
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <div className="flex gap-6">
                  <p className="text-sm text-gray-500">{ticket.bnsIds}</p>
                  <p className="text-sm text-gray-500">{ticket.pnrNumber}</p>
                  {/* <p className="text-sm text-gray-500">{ticket.bnsIds}</p>  */}
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex text-center justify-between">
                <div className="flex flex-col">
                <p className="text-lg font-semibold">{ticket.id}</p>
                  <p className="text-sm text-gray-500">YOLCULARIMA KAYITLI</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">PNR NO: </p>
                  <p className="text-sm text-gray-500">{ticket.pnrNumber}</p>
                </div>
                <p className="text-sm text-gray-500">
                  KOLTUK NO: {ticket.seatInfo}
                </p>
                <p className="text-sm text-gray-500">TUTAR: {ticket.price} TL</p>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="bg-blue-500 text-white  px-4 py-2 rounded-lg mr-2 "
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
              <div className="flex text-center ">
                <p className="text-lg font-semibold">Toplam Tutar: {ticket.price} TL</p>
              </div>
              <div className="flex text-center mt-4 justify-between">
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
