"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Dropdown } from "flowbite-react";
import { HiLogout, HiUser } from "react-icons/hi";
import { RiCoupon2Fill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import Link from "next/link";

const navigation = [
  { name: "Anasayfa", href: "#" },
  { name: "Yardım", href: "#" },
  { name: "Seyahat Sorgula", href: "#" },
  { name: "Hakkımızda", href: "#" },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="w-44 "
              src="https://nkuteknopark.com.tr/wp-content/uploads/2022/09/Pinsoft_logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {isAuthenticated ? (
            <div className="hidden lg:flex">
              <Dropdown label="Utku Cengiz" inline>
                <Dropdown.Item className="text-lg" icon={BiTrip}>
                  <Link href="/uyelik/seyahatlerim">Seyahatlerim</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-lg" icon={FaCalendarCheck}>
                  <Link href="/uyelik/rezervasyonlarim">Rezervasyonlarım</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-lg" icon={RiCoupon2Fill}>
                  <Link href="/uyelik/kuponlarim">Kuponlarım</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-lg" icon={HiUser}>
                  <Link href="/uyelik/profilim">Profilim</Link>
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item className="text-lg" icon={HiLogout}>
                  Çıkış Yap
                </Dropdown.Item>
              </Dropdown>
            </div>
          ) : (
            <>
              <a
                href="#"
                onClick={() => router.push("auth/login")}
                className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
              >
                Giriş Yap
              </a>
              <a
                href="#"
                onClick={() => router.push("auth/register")}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kayıt Ol
              </a>
            </>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-44 "
                src="https://nkuteknopark.com.tr/wp-content/uploads/2022/09/Pinsoft_logo.png"
                alt=""
              />
            </Link>
            {isAuthenticated ? (
              <></>
            ) : (
              <>
                <a
                  href="#"
                  className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Kayıt Ol
                </a>
              </>
            )}

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {isAuthenticated ? (
                <></>
              ) : (
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Giriş Yap
                  </a>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-indigo-200 rounded-full bottom-2 left-1/2 lg:hidden ">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto shadow-inner">
          <Link
            href="/uyelik/seyahatlerim"
            data-tooltip-target="tooltip-home"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50  group"
          >
            <BiTrip
              size={"1.5em"}
              className="text-indigo-500 hover:text-indigo-700"
            />

            <span className="sr-only">Seyahatlerim</span>
          </Link>

          <Link
            href="/uyelik/rezervasyonlarim"
            data-tooltip-target="tooltip-wallet"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <FaCalendarCheck
              size={"1.5em"}
              className="text-indigo-500 hover:text-indigo-700"
            />

            <span className="sr-only">rezervasyonlarim</span>
          </Link>

          <Link
            href="/uyelik/kuponlarim"
            data-tooltip-target="tooltip-settings"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <RiCoupon2Fill
              size={"1.5em"}
              className="text-indigo-500 hover:text-indigo-700"
            />

            <span className="sr-only">kuponlarim</span>
          </Link>

          <Link
            href="/uyelik/profilim"
            data-tooltip-target="tooltip-settings"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
          >
            <HiUser
              size={"1.5em"}
              className="text-indigo-500 hover:text-indigo-700"
            />

            <span className="sr-only">profilim</span>
          </Link>

          <Link
            href="/auth/login"
            data-tooltip-target="tooltip-profile"
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50  group"
          >
            <HiLogout
              size={"1.5em"}
              className="text-indigo-500 hover:text-indigo-700"
            />

            <span className="sr-only">login</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
