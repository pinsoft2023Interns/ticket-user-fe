import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "./components/Header";
import SeatScreen from "./seatscreen/page";
import Footer from "./components/Footer";
import TicketScreen from "./auth/ticketScreen/page";
import PaymentScreen from "./paymentScreen/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link
          rel="icon"
          href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIODg4ODhAXDg4ODhERDhASExISDhAQJBMYJhgXGBcbICwkHR0pHhcXJTYlKS4wMzMzGiI9PjsxPSwyMzABCwsLEA4QGxISHjIkICoyMjgwMjIwPTIyOzAyMjIyMjIwMjIzMzIyMDIyMjQ0MjAyMjIyMDIyNDAyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIFBwMEBgj/xABDEAACAQICBQYKCAUEAwAAAAAAAQIDBAURBiExQVEHEhNhcYEUIjJUkZOhsdHhFhcjQlJicpIVJDOCwUSisvBTY9P/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIEBQYDB//EADURAAIBAQQFCwMEAwAAAAAAAAABAgMEESFRBRIxQdETFFJhcYGRkqGxwRUy4QYi8PFCYqL/2gAMAwEAAhEDEQA/ANv3FeNKnOrUfMp04SqTk9kYJNtvsSZobSnTO4xGpNRqSo2ubVOjGTinHc6mXlPqepG5dMKEqmF38Kebk7Wpkltlks2l1tJrvPnFM6TQFnpyU6sknJO5dX9mJaZNXJF8yyZRMlM6YwbixZFUwSQXTLJlESmCpyIlMomWRJUsmWRxosmSVLoEIlAgEp5bNRABB3bfFrmj/SuatP8ARVnBexmasdOsQoZZ1+mivu1Yxn7dUvaeYB5VLPSqK6cU+1Jl1UktjfibOwvlPWqN5b5cZ0Xn381/E9nhOP2t6v5evGcss3Tb5tZf2PX3rUfPxaEnFqUW4yi04yTyafFPczVWjQVnqYwvg+rFeD+GjJp22a+7E+lgae0f5Qri25tO7zuqSyXOB+9PW+z8GkYr3TqavqtlzF8fS8jPjdTjT9mkvOt2A8rHU5U47R4g6F9U+GsqwlU6sZLeO/Ad5+KuG6u1te+rsxjw+0mZ1LzRf8AsPk6k6nk2XuPsX7L/wBMPK9XkTmbI8r+Fpmr2OgDqACiiigAooooAKKKKACiiigD6T4x4a8RXvi3x34Wg6l4P8IaBZi0g+G2v2w6noPgTaaC/ii1tNC0+GrTS7vpvD1OZdVY4qAUYzQAyOMHrX4Z+Iv7b/wCPVPh/wBtPA/h7WBsPSLZwb6Ro2mmQ39hpPawL8zodzWibY/wDHemv/Jm0fVtRg1NRUlc5SlJ8ldjTmsbKx4y+WVdc8V2e4n1vU83e2K54b/3Wjpmpx8a+J2s61hqnSdTZrZ58kXTbT5kVXjtkxkjMTklBkeYIz0qNuPtf8Ay9f2OPwQ/bI8Q1z/hZ/h7WtP8AkYaE/wCJbP8AvaPq+lJJqJH7oBj75/mOOPxGevpWfxN8WVheGJvFKzyDzLZw3XoB4IyBXD3QD3xXq/7I//ACnRcOtfNXxN+z58WPxD8e+FXw+8GaH8KfC/xLpckcvr8e4YyfozXGpWP8CfF/pf8AgoXSdMv6/f0xtTg1if7d/kk+vmrzXlu4ucQz5J/2kAD6gkHtX0P+2t8X/ACBtYeINl4s1WzT7ezQbeVNm3le72gttiBdwQcgQfU2U7kEcVSz1TlGK1aRpXGVZNaJ1r2b3PJMjXh3m3iE57H1oYI4GnWnW/hvQdEvJL9Bn0C3Wp1zrZ3MSatP8AcuMLyXU6tuLmN29q22OpTle"
        />
        <Header />
        <TicketScreen />
        {/* <PaymentScreen /> */}
        {/* <SeatScreen /> */}
        {/* <main>{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

// {selectedSeat === ticket.id && (
//   <div className="absolute top-full left-0 w-full bg-black py-2">
//     {/* Koltuk seçim ekranı */}
//     <div className="flex justify-center">
//       <img src="/bus-seats.png" alt="Otobüs Koltuk Düzeni" />
//     </div>
//     <div className="flex justify-center">
//       <div className="grid grid-cols-5 gap-1">
//         {busSeats.map((seat) => (
//           <div
//             key={seat}
//             className="bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300"
//             onClick={() =>
//               console.log(`Selected seat: ${seat}`)
//             }
//           >
//             {seat}
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )}
