import React from "react";
import Image from "next/image";
import { relative } from "path";

const seatInfo = [
  { seatLength: 38, busType: "2+1" },
  { seatLength: 48, busType: "2+2" },
  { seatLength: 41, busType: "2+1" },
];

function SeatMap() {
  return (
    <div className="inline-flex flex-col  gap-12">
      {seatInfo.map((item, index) => (
        <div
          key={index}
          className="flex gap-8 border-y border-r rounded-2xl py-4 pr-4 justify-end pl-8"
        >
          {[...Array(item.seatLength)].map((_, i) => {
            if (item.busType === "2+1") {
              if (i % 3 === 0) {
                return (
                  <div key={i} className="flex flex-col gap-3">
                    {[...Array(3)].map((_, j) => (
                      <button
                        key={j}
                        className={`relative ${j === 1 ? "mb-12" : " "}`}
                      >
                        <Image
                          src="/blueSeat.svg"
                          alt="seat"
                          className="rotate-90"
                          width={40}
                          height={40}
                        />
                        {j === 0 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 1}
                          </span>
                        ) : null}
                        {j === 1 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 2}
                          </span>
                        ) : null}
                        {j === 2 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 3}
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                );
              }
            } else if (item.busType === "2+2") {
              if (i % 4 === 0) {
                return (
                  <div key={i} className="flex flex-col gap-3">
                    {[...Array(4)].map((_, j) => (
                      <button
                        key={j}
                        className={`relative ${j === 1 ? "mb-12" : ""}`}
                      >
                        <Image
                          src="/blueSeat.svg"
                          className="rotate-90"
                          alt="seat"
                          width={40}
                          height={40}
                        />
                        {j === 0 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 1}
                          </span>
                        ) : null}
                        {j === 1 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 2}
                          </span>
                        ) : null}
                        {j === 2 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 3}
                          </span>
                        ) : null}
                        {j === 3 ? (
                          <span className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/4 text-sm">
                            {i + 4}
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                );
              }
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default SeatMap;
