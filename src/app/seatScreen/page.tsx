import React from "react";
import SeatMap from "../components/SeatMap";

const seatInfo = [
  { seatLength: 38, busType: "2+1" },
  //   { seatLength: 48, busType: "2+2" },
  //   { seatLength: 41, busType: "2+1" },
];

function SeatScreen(): JSX.Element {
  return (
    <>
      <SeatMap seatInfo={seatInfo} />
    </>
  );
}

export default SeatScreen;
