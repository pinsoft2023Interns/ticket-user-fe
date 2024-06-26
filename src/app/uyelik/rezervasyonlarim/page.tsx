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

function ReservationCard({
  ticket,
  onOpenModal,
}: {
  ticket: Ticket;
  onOpenModal: (ticket: Ticket, action: string) => void;
}) {
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
          <button
            className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6"
            onClick={() => onOpenModal(ticket, "acigaAl")}
          >
            Açığa Al
          </button>
          <button
            className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6"
            onClick={() => onOpenModal(ticket, "degistir")}
          >
            Değiştir
          </button>
          <button
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none lg:col-span-3 col-span-6"
            onClick={() => onOpenModal(ticket, "iptalEt")}
          >
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
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<string>("");

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

  const handleModalOpen = (ticket: Ticket, action: string) => {
    setSelectedTicket(ticket);
    setModalAction(action);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
    setModalAction("");
  };

  const handleAcigaAl = async () => {
  if (!selectedTicket) return;
  try {
    await axios.put(
      `https://ticket-web-be-6ogu.onrender.com/ticket/cancel/${selectedTicket.id}`,
      {
        id: selectedTicket.id,
        canceled: true,
      }
    );
    const updatedResponse = await axios.get(
      "https://ticket-web-be-6ogu.onrender.com/busnavigation"
    );
    const updatedData: BusNav[] = updatedResponse.data;
    const updatedTicketsWithDepartureDates = updatedData.reduce(
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
    setTickets(updatedTicketsWithDepartureDates);
    handleModalClose();
  } catch (error) {
    console.error("Bileti açığa alma sırasında hata oluştu:", error);
  }
};

  
  

  return (
    <div className="xl:ml-12 flex flex-col">
      {" "}
      <h1 className="text-3xl mx-auto lg:mx-0 font-bold mb-8">
        Rezervasyonlarım
      </h1>
      <div className="space-y-6">
        {tickets.map((ticket) => (
          <ReservationCard
            key={ticket.id}
            ticket={ticket}
            onOpenModal={handleModalOpen}
          />
        ))}
      </div>
      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">
              {selectedTicket.busNavStations![0].station.name} Seferi
            </h2>
            <p className="text-gray-700 mb-2">
              Kalkış: {moment(selectedTicket.departureDate).format("LLL")}
            </p>
            <p className="text-gray-700 mb-6">
              Varış:{" "}
              {moment(
                selectedTicket.busNavStations![
                  selectedTicket.busNavStations!.length - 1
                ].arrivalDate
              ).format("LLL")}
            </p>
            {modalAction === "acigaAl" && (
              <>
                <p className="text-gray-600 mb-4">
                  Bileti Açığa Al: Biletinizi açığa alırsanız bilet bedeli
                  hesabınıza yüklenir. Yeni biletinizi birçok farklı firmadan
                  seçebilir, dilediğiniz sefer için kullanabilir, fiyat farkı
                  olsa da alabilirsiniz.
                </p>
                <p className="text-gray-600 mb-4">
                  Bileti açığa almak üzeresiniz. Onaylıyor musunuz?
                </p>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={handleAcigaAl}
                >
                  Açığa Al
                </button>
              </>
            )}
            {modalAction === "degistir" && (
              <>
                <p className="text-gray-600 mb-4">
                  Bileti Değiştir: Bilet değişimini yalnızca aynı firma ile
                  yapabilirsiniz. Yeni bilet mevcut tutarından farklı ise işlem
                  yapılmaz.
                </p>
                <p className="text-gray-600 mb-4">
                  Müşteri hizmetlerine bağlanınız.{" "}
                </p>
                <button
                  type="button"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={handleModalClose}
                >
                  Tamam
                </button>
              </>
            )}
            {modalAction === "iptalEt" && (
              <>
                <p className="text-gray-600 mb-4">
                  Bileti İptal Et: Biletin iptali durumunda 1-7 iş günü
                  içerisinde ücret iadesi gerçekleşir.
                </p>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={handleModalClose}
                >
                  Tamam
                </button>
              </>
            )}
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={handleModalClose}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyReservations;
