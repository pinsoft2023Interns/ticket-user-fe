"use client";
import React, { useEffect, useState } from "react";
import api from "../../../../intercepter";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: "MALE",
    name: "",
    surname: "",
    username: "",
    role: "COMPANY_USER",
    phone: "",
    identificationNumber: "",
    birthDate: new Date(),
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "birthDate" ? new Date(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.surname === "" ||
      formData.email === "" ||
      formData.username === "" ||
      formData.phone === "" ||
      formData.identificationNumber === "" ||
      formData.password === "" ||
      confirmPassword === "" ||
      agreedToTerms === false
    ) {
      toast.error("Lütfen tüm alanları doldurunuz.");
      return;
    }
    if (formData.password !== confirmPassword) {
      toast.error("Şifreler uyuşmuyor.");
      return;
    }
    if (!agreedToTerms) {
      toast.error("Kullanım şartlarını kabul etmelisiniz.");
      return;
    }
    if (formData.identificationNumber.length !== 11) {
      toast.error("TC Kimlik numarası 11 haneli olmalıdır.");
      return;
    }
    if (formData.phone.length !== 10) {
      toast.error("Telefon numarası 10 haneli olmalıdır.");
      return;
    }
    if (formData.birthDate > new Date()) {
      toast.error("Doğum tarihi bugünden büyük olamaz.");
      return;
    }
    if (formData.birthDate < new Date("01.01.1900")) {
      toast.error("Doğum tarihi 1900 yılından küçük olamaz.");
      return;
    }
    if (formData.name.length < 2) {
      toast.error("İsim 2 karakterden küçük olamaz.");
      return;
    }
    if (formData.surname.length < 2) {
      toast.error("Soyisim 2 karakterden küçük olamaz.");
      return;
    }
    if (formData.username.length < 4) {
      toast.error("Kullanıcı adı 4 karakterden küçük olamaz.");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Şifre 6 karakterden küçük olamaz.");
      return;
    }

    try {
      const response = await api.post("/register", {
        ...formData,
        birthDate: formData.birthDate
          ? new Date(formData.birthDate).toISOString()
          : "",
      });
      toast.success("Başarıyla Kaydoldunuz.");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.userId);
      router.push("/");
    } catch (error) {
      toast.error("Kayıt başarısız, lütfen bilgilerinizi kontrol ediniz.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const years: number[] = [];
  for (let year = 1990; year <= 2021; year++) {
    years.push(year);
  }

  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  pt:mt-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <img
            className="w-[200px] h-[20] mr-2"
            src="https://uploads-ssl.webflow.com/605c9d764f1ef938a009ac98/61e01bfbdd8632a72962edc2_Pinsoft_Yatay_Logo_mavi-for%20animation.svg"
            alt="logo"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              Hesap Oluşturun
            </h2>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    İsim
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Utku"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="surname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Soyisim
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="surname"
                    id="surname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Cengiz"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="pinsoft@pinsoft.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="spacespacexx"
                  required
                />
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
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Telefon Numaranızı girin"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="identificationNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  TC Kimlik Numarası
                </label>
                <input
                  type="text"
                  id="identificationNumber"
                  name="identificationNumber"
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
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cinsiyet
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender-name"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value={"FEMALE"}>Kadın</option>
                    <option value={"MALE"}>Erkek</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Şifre
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Şifre Onayla
                </label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  id="agreedToTerms"
                  type="checkbox"
                  name="agreedToTerms"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="agreedToTerms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    Kullanım{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Şartları ve Koşullarını Kabul Ediyorum
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Hesap Oluştur
              </button>

              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="/auth/login"
                >
                  {" "}
                  Hesabınız var mı ?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
