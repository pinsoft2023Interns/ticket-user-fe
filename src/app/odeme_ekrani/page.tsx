"use client";
import React, { useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";

function PersonInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tc: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [expDate, setExpDate] = useState("");
  const [ccv, setCcv] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const maskCardNumber = (cardNumberValue) => {
    console.log("cardNumber", cardNumberValue);
    let input = cardNumberValue.replace(/\D/g, "");
    if (input.length > 16) {
      input = input.slice(0, 16);
    }

    let formattedInput = input.match(/.{1,4}/g);
    if (formattedInput) {
      formattedInput = formattedInput.join(" ");
    }
    return formattedInput || "";
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
  };

  return (
    <div className="flex justify-center ">
      <div className="flex w-full p-8">
        <form className="flex mb-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            <div className="flex flex-col gap-8 pr-10  h-auto">
              <span className="font-semibold">Firma</span>
              <hr />
              <div className="flex justify-between gap-4">
                <span className="font-semibold">kalkış</span>
                <span className="font-semibold">Varış</span>
              </div>
              <div className="flex justify-between gap-4">
                <p>Denizli Otogarı</p>
                <p>Keşan Otogarı</p>
              </div>
              <div className="flex justify-between gap-4">
                <span className="font-semibold">Hareket Zamanı</span>
                <span className="font-semibold">Koltuk</span>
              </div>
              <div className="flex justify-between gap-4">
                <p>19 Mayıs Pazar 01:00</p>
                <p>1</p>
              </div>
              <div className="flex justify-between gap-4">
                <span className="font-semibold">Peron</span>
              </div>
              <div className="flex justify-between gap-4">
                <p>1</p>
              </div>
              <div className="flex justify-between gap-4">Bilet İşlemleri</div>
              <p>
                Seferin 6 saat öncesine kadar biletinizi açığa alabilir,
                değiştirebilir ya da iptal edebilirsiniz.
              </p>
              <p className="text-red-600">
                Otobüs Cumartesi'yi Pazar'a bağlayan gece kalkacaktır.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Kullanıcı Bilgileri
              </h2>
              <div className="mb-5">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adı
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Adınızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Soyadı
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Soyadınızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="tc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  TC Kimlik Numarası
                </label>
                <input
                  type="text"
                  id="tc"
                  name="tc"
                  value={formData.tc}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="TC Kimlik Numaranızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="birthDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Doğum Tarihi
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cinsiyet
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="male">Erkek</option>
                  <option value="female">Kadın</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Telefon Numaranızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Adresinizi girin"
                  required
                />
              </div>
            </div>
            <div className=" flex flex-col justify-start items-center ">
              <h2 className="text-lg  font-semibold mb-4">Ödeme Bilgileri</h2>
              <div className="flex flex-col  items-center  gap-4">
                <button
                  disabled
                  className="opacity-50 w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br bg-red-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                    Banka/Kredi Kartı
                  </span>
                </button>

                <img
                  className="w-full"
                  src="https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/cards-782.png"
                  alt="Visa, MasterCard, American Express, Maestro, Visa Electron"
                />
                <div className="w-full mb-5 ">
                  <label
                    htmlFor="currentPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kart Numarası
                  </label>
                  <input
                    type="text"
                    id="currentPassword"
                    name="currentPassword"
                    value={maskCardNumber(formData.currentPassword)}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="**** **** **** ****"
                    required
                  />
                </div>
                <div className="flex gap-2 w-full mb-5 ">
                  <div>
                    <label
                      htmlFor="newPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Son Kullanma Tarihi
                    </label>
                    <input
                      id="newPassword"
                      name="newPassword"
                      value={expDate}
                      onChange={handleExpDateChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Son Kullanma Tarihi"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Cvv
                    </label>
                    <input
                      type="text"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={ccv}
                      onChange={handleCcvChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-lg font-semibold">Duyuru Tercihleri</h2>
                <div className="mb-5">
                  <label
                    htmlFor="emailNotification"
                    className="flex items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <input
                      type="checkbox"
                      id="emailNotification"
                      name="emailNotification"
                      className="mr-2"
                    />
                    Ön Bilgilendirme Formu'nu , Mesafeli Satış Sözleşmesi'ni
                    okudum ve onaylıyorum. Kişisel verilerin işlenmesine ilişkin
                    Aydınlatma Metni’ni ve Çerez Politikası Metni'ni okudum.
                    Kullanım Koşulları’nı kabul ediyorum.
                  </label>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="smsNotification"
                    className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <input
                      type="checkbox"
                      id="smsNotification"
                      name="smsNotification"
                      className="mr-2"
                    />
                    Koşulsuz İptal Güvencesi İstiyorum (44 Tl / 1 kişi)
                  </label>
                </div>

                <div className="flex flex-col items-center justify-center ">
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                    440 Tl Güvenli Ödeme Yap
                  </button>
                  <div className="flex items-center gap-10">
                    <AiOutlineSafety className="w-20 h-20 text-red-600" />
                    <p>
                      Pinsoft üzerinden yapılan işlemler güvenlik
                      sertifikalarıyla korunmaktadır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonInformation;
