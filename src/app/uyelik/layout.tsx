"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Seyahatlerim", href: "/uyelik/seyahatlerim" },
  { name: "Rezervasyonlarım", href: "/uyelik/rezervasyonlarim" },
  { name: "Kuponlarım", href: "/uyelik/kuponlarim" },
  { name: "Profilim", href: "/uyelik/profilim" },
  { name: "Çıkış Yap", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-12 sticky top-0 mx-auto max-w-8xl items-flex end-0 bg-red gap-x-6 p-6 lg:px-8">
      <div className="w-full col-span-3 lg:flex sticky top-0 ">
        <nav className="flex flex-1 flex-col sticky top-0" aria-label="Sidebar">
          <ul role="list" className="-mx-2 space-y-1 sticky top-0">
=======
    <div className="grid grid-cols-12 mx-auto max-w-7xl justify-between gap-x-6  lg:px-8">
      <div className=" flex-none lg:col-span-2 hidden lg:flex col-span-12">
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
          <ul role="list" className="-mx-2 space-y-1">
>>>>>>> f181dc6007d57a97e5025047673dcdaabb70f344
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-gray-50 text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                    "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
<<<<<<< HEAD
      <div className="flex-grow p-6 md:overflow-y-auto col-span-9  ">
=======
      <div className="flex-grow  md:overflow-y-auto lg:col-span-10 col-span-12">
>>>>>>> f181dc6007d57a97e5025047673dcdaabb70f344
        {children}
      </div>
    </div>
  );
}
