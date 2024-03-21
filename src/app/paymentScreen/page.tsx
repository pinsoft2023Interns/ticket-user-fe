"use client";
import React, { useState, useEffect } from "react";

function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState("4256 4256 4256 4256");
  const [expDate, setExpDate] = useState("12/24");
  const [ccv, setCcv] = useState("");
  const [cardName, setCardName] = useState("John Doe");
  const [isValid, setIsValid] = useState(false);
  const [isBackVisible, setIsBackVisible] = useState(false);

  const handleCardNumberChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");

    if (input.length > 16) {
      input = input.slice(0, 16);
    }

    let formattedInput = input.match(/.{1,4}/g);
    if (formattedInput) {
      formattedInput = formattedInput.join(" ");
    }
    setCardNumber(formattedInput || "");
  };

  const handleExpDateChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    let formattedInput = input.match(/.{1,2}/g);
    if (formattedInput) {
      formattedInput = formattedInput.join("/");
    }
    setExpDate(formattedInput || "");
  };

  const handleCcvChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 3) {
      input = input.slice(0, 3);
    }
    setCcv(input);
    setIsBackVisible(input.length >= 1);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Payment successfully submitted");
  };

  useEffect(() => {
    setIsValid(cardNumber.trim() !== "");
  }, [cardNumber]);

  return (
    <div>
      <div className="m-4">
        <div className="credit-card w-1/3 shadow-lg mx-auto rounded-xl bg-white relative">
          <div className="flex flex-col justify-center items-center">
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
                <div className="flex justify-end">
                  <img
                    className="w-full h-auto"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                    alt="back credit card"
                  />
                </div>
                <div className="flex justify-end text-xs">
                  <p className="flex z-30 text-3xl"> {ccv}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Card payment
            </h1>
            <div>
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Card holder"
                  value={cardName}
                  onChange={handleCardNameChange}
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Card number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </div>
              <div className="my-3 flex flex-col">
                <div className="mb-2">
                  <label htmlFor="" className="text-gray-700">
                    Expired
                  </label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <input
                    type="text"
                    className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    placeholder="Security code"
                    value={ccv}
                    onChange={handleCcvChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="mt-6 p-4">
            <button
              className={`submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors ${
                isValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Pay now
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PaymentScreen;
