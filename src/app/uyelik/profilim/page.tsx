"use client";
import { useState, useEffect } from "react";
import api from "../../../../intercepter";
import toast from "react-hot-toast";

interface UserData {
  name: string;
  surname: string;
  identificationNumber: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
}

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tc: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
  });

  const [formPassword, setFormPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(
          `/user_account/${localStorage.getItem("id")}`
        );
        const userData: UserData = response.data;
        setUserData(userData);
        setFormData({
          firstName: userData.name,
          lastName: userData.surname,
          tc: userData.identificationNumber,
          birthDate: userData.birthDate,
          gender: userData.gender,
          phone: userData.phone,
          email: userData.email,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChangeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const updatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formPassword.newPassword !== formPassword.confirmPassword) {
      toast.error("Şifreler uyuşmuyor");
      return;
    }
    if (formPassword.newPassword.length < 6) {
      toast.error("Şifre en az 6 karakter olmalıdır");
      return;
    }
    if (userData && userData.password !== formPassword.currentPassword) {
      toast.error("Eski şifrenizi yanlış girdiniz");
      return;
    }
    try {
      const response = await api.put(
        `/user_account/${localStorage.getItem("id")}/password`,
        {
          id: localStorage.getItem("id"),
          password: formPassword.newPassword,
        }
      );

      if (response.status === 200) {
        toast.success("Şifreniz başarıyla değiştirildi");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Şifre güncellenirken bir hata oluştu");
    }
  };

  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-12 w-full gap-8">
        <form className="mb-8 col-span-6" onSubmit={updateData}>
          <div className="w-full p-4">
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
                onChange={handleChangeUserData}
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
                onChange={handleChangeUserData}
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
                onChange={handleChangeUserData}
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
                onChange={handleChangeUserData}
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
                onChange={handleChangeUserData}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="">Seçiniz</option>
                <option value="MALE">Erkek</option>
                <option value="FEMALE">Kadın</option>
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
                onChange={handleChangeUserData}
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
                onChange={handleChangeUserData}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email Adresinizi girin"
                required
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
              Bilgilerimi Güncelle
            </button>
          </div>
        </form>
        <form className="mb-8 col-span-6" onSubmit={updatePassword}>
          <div className="w-full p-4">
            <h2 className="text-lg  font-semibold mb-4">Şifre Değiştirme</h2>
            <div className="mt-5 ">
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
                  value={formPassword.currentPassword}
                  onChange={(e) => {
                    setFormPassword((prevData) => ({
                      ...prevData,
                      currentPassword: e.target.value,
                    }));
                  }}
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
                  value={formPassword.newPassword}
                  onChange={(e) => {
                    setFormPassword((prevData) => ({
                      ...prevData,
                      newPassword: e.target.value,
                    }));
                  }}
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
                  value={formPassword.confirmPassword}
                  onChange={(e) => {
                    setFormPassword((prevData) => ({
                      ...prevData,
                      confirmPassword: e.target.value,
                    }));
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Yeni Şifrenizi tekrar girin"
                  required
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                Şifremi Güncelle
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold mt-10">Duyuru Tercihleri</h2>
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
  );
};

export default Page;
