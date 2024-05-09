"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../../../intercepter";

function MyProfile() {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    name: "",
    surname: "",
    gender: "",
    phone: "",
    email: "",
    birthDate: "",
    identificationNumber: "",
    role: "USER",
  });
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userInfo = api.get(`/user_account/${localStorage?.getItem("id")}`);

    userInfo.then((response) => {
      setUser(response.data);
      setFormData({
        id: response.data.id,
        username: response.data.username,
        name: response.data.name,
        surname: response.data.surname,
        gender: response.data.gender,
        phone: response.data.phone,
        email: response.data.email,
        birthDate: response.data.birthDate,
        identificationNumber: response.data.identificationNumber,
        role: response.data.role,
      });
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Şifreler uyuşmuyor");
      return;
    }
    if (currentPassword === "") {
      toast.error("Şuanki şifrenizi giriniz");
      return;
    }
    if (newPassword === "") {
      toast.error("Yeni şifrenizi giriniz");
      return;
    }
    if (confirmPassword === "") {
      toast.error("Yeni şifrenizi tekrar giriniz");
      return;
    }
    const userInfo = api.put(
      `/user_account/${localStorage?.getItem("id")}/password`,
      {
        id: localStorage?.getItem("id"),
        password: newPassword,
      }
    );
    userInfo.then((response) => {
      toast.success("Şifreniz güncellendi");
      setConfirmPassword("");
      setCurrentPassword("");
      setNewPassword("");
    });
  };

  const submitUserForm = (e) => {
    e.preventDefault();
    formData.birthDate = new Date(formData.birthDate).toISOString();
    const userInfo = api.put(`/user_account/${localStorage?.getItem("id")}`, {
      ...formData,
    });
    userInfo.then((response) => {
      toast.success("Kullanıcı bilgileriniz güncellendi");
    });
  };
  console.log(user, "user");
  return (
    <div className="flex justify-center ">
      <div className=" w-full p-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <form className="mb-8" onSubmit={submitUserForm}>
            <div className="ml-10">
              <h2 className="text-lg font-semibold mb-4">
                Kullanıcı Bilgileri
              </h2>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adı
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Adınızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Soyadı
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Soyadınızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Soyadı
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Soyadınızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="identificationNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  T.C Kimlik Numarası
                </label>
                <input
                  type="text"
                  id="identificationNumber"
                  name="identificationNumber"
                  value={formData.identificationNumber}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="kimliğinizi girin"
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
                  <option value="MALE">Erkek</option>
                  <option value="FEMALE">Kadın</option>
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
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={submitUserForm}
              >
                Bilgilerimi Güncelle
              </button>
            </div>
          </form>
          <form className="mb-8" onSubmit={submitPassword}>
            <div className="ml-10">
              <h2 className="text-lg  font-semibold mb-4">Şifre Değiştirme</h2>
              <div className="mt-8 ">
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
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
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
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Yeni Şifrenizi tekrar girin"
                    required
                  />
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={submitPassword}
                >
                  Şifremi Güncelle
                </button>
              </div>
              <div>
                <h2 className="text-lg font-semibold mt-10">
                  Duyuru Tercihleri
                </h2>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
