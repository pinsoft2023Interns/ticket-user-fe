"use client";
import React, { useState } from "react";

function MyProfile() {
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

  return (
    <div className="flex justify-center bg-black">
      <div className="max-w-md w-full mx-auto bg-rose-800">
        <form className="mb-8" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg font-semibold mb-4">Kullanıcı Bilgileri</h2>
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
                <option value="other">Diğer</option>
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
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Şifre Değiştirme</h2>
            <div className="mb-5">
              <label
                htmlFor="currentPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Şuanki Şifre
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Şuanki Şifrenizi girin"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="newPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Yeni Şifre
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Yeni Şifrenizi girin"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Yeni Şifre (Tekrar)
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Yeni Şifrenizi tekrar girin"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6"
          >
            Şifremi Güncelle
          </button>

          <div>
            <h2 className="text-lg font-semibold mb-4">Duyuru Tercihleri</h2>
            <div className="mb-5">
              <label
                htmlFor="emailNotification"
                className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <input
                  type="checkbox"
                  id="emailNotification"
                  name="emailNotification"
                  className="mr-2"
                />
                E-Mail Bildirimleri
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
                SMS Bildirimleri
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyProfile;
