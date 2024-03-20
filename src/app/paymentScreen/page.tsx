"use client";
import React, { useState } from "react";

function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState("4256 4256 4256 4256");
  const [expDate, setExpDate] = useState("12/24");
  const [ccv, setCcv] = useState("342");
  const [cardName, setCardName] = useState("John Doe");

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
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
    const input = event.target.value.replace(/\D/g, "");
    setCcv(input);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
        <form className="bg-white w-full max-w-3xl mx-auto px-4 lg:px-6 py-8 shadow-md rounded-md flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:pr-8 lg:border-r-2 lg:border-slate-300">
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="text-neutral-800 font-bold text-sm mb-2 block"
              >
                Card number:
              </label>
              <input
                id="cardNumber"
                type="text"
                onChange={handleCardNumberChange}
                className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                placeholder="XXXX XXXX XXXX XXXX"
                value={cardNumber}
              />
            </div>
            <div className="flex gap-x-2 mb-4">
              <div className="block">
                <label
                  htmlFor="expDate"
                  className="text-neutral-800 font-bold text-sm mb-2 block"
                >
                  Exp. date:
                </label>
                <input
                  id="expDate"
                  type="text"
                  onChange={handleExpDateChange}
                  className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                  placeholder="MM/YY"
                  value={expDate}
                />
              </div>
              <div className="block">
                <label
                  htmlFor="ccvNumber"
                  className="text-neutral-800 font-bold text-sm mb-2 block"
                >
                  CCV:
                </label>
                <input
                  id="ccvNumber"
                  type="text"
                  onChange={handleCcvChange}
                  className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                  placeholder="XXX"
                  value={ccv}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardHolder"
                className="text-neutral-800 font-bold text-sm mb-2 block"
              >
                Cardholder name:
              </label>
              <input
                id="cardHolder"
                type="text"
                onChange={handleCardNameChange}
                className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                placeholder="John Doe"
                value={cardName}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="bg-slate-300 w-full h-44 rounded-md mb-4"></div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Pay Now
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PaymentScreen;
