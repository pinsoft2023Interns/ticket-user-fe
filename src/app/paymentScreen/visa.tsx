"use client";
import React from "react";

function VisaCard({ isBackVisible, cardNumber, cardName, expDate, ccv }) {
  return (
    <>
      <div className={`relative ${isBackVisible ? "rotate-180" : ""}`}>
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
    </>
  );
}

export default VisaCard;
