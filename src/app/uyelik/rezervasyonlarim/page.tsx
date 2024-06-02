"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/tr";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaBusSimple } from "react-icons/fa6";

interface Ticket {
  id: number;
  reservationTimestamp: string;
  seatInfo: string;
  price: number;
  bnsIds: string;
  pnrNumber: string;
  departureDate: string;
  name: string;
  busNavStations?: BusNavStation[];
}

interface BusNavStation {
  id: number;
  stationOrder: number;
  arrivalDate: string;
  departureDate: string;
  routeIdentifier: string;
  station: {
    id: number;
    name: string;
  };
}

interface BusNav {
  id: number;
  tickets: Ticket[];
  busNavStation: BusNavStation[];
}

function ReservationCard({ ticket }: { ticket: Ticket }) {
  return (
    <div key={ticket.id} className="inline-flex flex-col w-fit mx-auto lg:mx-0">
      <div className="border rounded-lg md:py-4 p-8 flex md:flex-row flex-col gap-4 items-center mt-12">
        <div className="flex md:gap-12 gap-6">
          <div className="flex flex-col">
            <h3 className="text-xl">
              {ticket.busNavStations![0].station.name}
            </h3>
            <div className="flex md:gap-2 flex-col md:flex-row">
              <span className="text-sm">Kalkış:</span>
              <span className="text-sm">
                {moment(ticket.departureDate).format("LLL")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-3 bg-indigo-700"></span>
            <FaBusSimple />
            <span className="h-[2px] w-3 bg-indigo-700"></span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">
              {
                ticket.busNavStations![ticket.busNavStations!.length - 1]
                  .station.name
              }
            </h3>
            <div className="flex md:gap-2 flex-col md:flex-row">
              <span className="text-sm">Varış:</span>
              <span className="text-sm">
                {moment(
                  ticket.busNavStations![ticket.busNavStations!.length - 1]
                    .arrivalDate
                ).format("LLL")}
              </span>
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
  );
}

function MyReservations() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ticket-web-be-6ogu.onrender.com/busnavigation"
        );
        const data: BusNav[] = response.data;

        const ticketsWithDepartureDates = data.reduce(
          (acc: Ticket[], busNav: BusNav) => {
            const departureDate =
              busNav.busNavStation.length > 0
                ? busNav.busNavStation[0].departureDate
                : "";
            const ticketsWithDates = busNav.tickets.map((ticket: Ticket) => ({
              ...ticket,
              departureDate: departureDate || "",
              busNavStations: busNav.busNavStation,
            }));
            return [...acc, ...ticketsWithDates];
          },
          []
        );

        setTickets(ticketsWithDepartureDates);
      } catch (error) {
        console.error("API isteği sırasında hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    moment.locale("tr");
  }, []);

  return (
    <div className="xl:ml-12 flex flex-col">
      <h1 className="text-3xl mx-auto lg:mx-0">Rezervasyonlarım</h1>
      {tickets.map((ticket) => (
        <ReservationCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default MyReservations;
