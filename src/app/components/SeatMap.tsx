"use client";
import React from "react";
import Image from "next/image";
import { relative } from "path";

function SeatMap({ seatInfo }) {
  const handleSeatClick = (seatNumber) => {
    console.log("Clicked seat number:", seatNumber);
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex flex-col  gap-12 overflow-auto">
        {seatInfo.map((item, index) => (
          <div
            key={index}
            className="flex gap-8 border rounded-2xl py-4 px-4  justify-between w-max"
          >
            <div className="flex flex-col justify-between items-end mr-4">
              <span className="text-sm border-x border-b -mt-4 px-4 ml-2">
                KAPI
              </span>

              <Image
                src="/steering-wheel.svg"
                alt="seat"
                width={50}
                height={50}
              />
            </div>
            {[...Array(item.seatLength)].map((_, i) => {
              if (item.busType === "2+1") {
                if (i % 3 === 0) {
                  return (
                    <div key={i} className="flex flex-col gap-3">
                      {[...Array(3)].map((_, j) => (
                        <button
                          key={j}
                          className={`relative ${j === 1 ? "mb-12" : ""}`}
                          onClick={() => handleSeatClick(i + j + 1)}
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
                          onClick={() => handleSeatClick(i + j + 1)}
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
    </div>
  );
}

export default SeatMap;
