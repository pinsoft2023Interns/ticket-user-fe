"use client";
import React, { useState, useEffect } from "react";
import api from "../../../intercepter";
import VisaCard from "./visa";
import MasterCard from "./master";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PaymentScreen() {
  const router = useRouter();

  const [cardNumber, setCardNumber] = useState("4256 4256 4256 4256");
  const [expDate, setExpDate] = useState("12/24");
  const [ccv, setCcv] = useState("");
  const [cardName, setCardName] = useState("John Doe");
  const [isValid, setIsValid] = useState(false);
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [isVisaCard, setIsVisaCard] = useState(true);

  const handleCardNumberChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");

    if (input.length > 16) {
      input = input.slice(0, 16);
    }

    let formattedInput = input.match(/.{1,4}/g);
    if (formattedInput) {
      formattedInput = formattedInput.join(" ");
    }

    if (input.charAt(0) === "4") {
      setIsVisaCard(true);
    } else if (input.charAt(0) === "5") {
      setIsVisaCard(false);
    } else if (input !== "") {
      setIsVisaCard(true);
      alert("Böyle bir kart tanımı yoktur !");
      return;
    }
    setCardNumber(formattedInput || "");
  };

  const handleExpDateChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 4) {
      input = input.slice(0, 4);
    }
    let formattedInput = input.match(/.{1,2}/g);
    if (formattedInput) {
      formattedInput = formattedInput.join("/");
    }

    if (formattedInput) {
      const [month, year] = formattedInput.split("/");
      if (parseInt(month) > 12) {
        console.log(`12'den büyük bir değer`);
        return;
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cardName || !cardNumber || !expDate || !ccv) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }
    const paymentData = {
      cardholderName: cardName,
      cardNumber: cardNumber.replace(/\s/g, ""),
      expiration: expDate,
      cvv: parseInt(ccv),
      cardLimit: 0 
    };

    try {
      const response = await api.post("/cardInfo", paymentData);

      if (response.status === 200) {
        console.log("Payment successfully submitted");
        toast.success("Ödeme Başarıyla Gerçekleşti");
        router.push("/");  
      } else {
        console.error("Payment submission failed");
        toast.error("Ödeme Gönderimi Başarısız Oldu");
      }
    } catch (error) {
      console.error("Error submitting payment:", error);
      toast.error("Ödeme Gönderilirken Hata Oluştu");
    }
  };

  useEffect(() => {
    setIsVisaCard(cardNumber.charAt(0) === "4");
    setIsValid(cardNumber.trim() !== "");
  }, [cardNumber]);
  return (
    <div>
      <div className="m-4">
        <div className="credit-card w-1/3 shadow-lg mx-auto rounded-xl bg-white relative">
          <div className="flex flex-col justify-center items-center">
            {isVisaCard ? (
              <VisaCard
                isBackVisible={isBackVisible}
                cardNumber={cardNumber}
                cardName={cardName}
                expDate={expDate}
                ccv={ccv}
              />
            ) : (
              <MasterCard
                isBackVisible={isBackVisible}
                cardNumber={cardNumber}
                cardName={cardName}
                expDate={expDate}
                ccv={ccv}
              />
            )}
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
                <div className="flex justify-between mb-2">
                  <label htmlFor="" className="text-gray-700">
                    Expired
                  </label>
                  <label htmlFor="" className="text-gray-700">
                    Son Kullanım Tarihi
                  </label>
                </div>
                <div className="flex grid-cols-2 sm:grid-cols-4 gap-2 justify-between  ">
                  <input
                    type="text"
                    className="block w-3/4 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    placeholder="Security code"
                    value={ccv}
                    onChange={handleCcvChange}
                  />
                  <input
                    type="text"
                    className="block w-3/4 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    placeholder="Expiration Date (MM/YY)"
                    value={expDate}
                    onChange={handleExpDateChange}
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

