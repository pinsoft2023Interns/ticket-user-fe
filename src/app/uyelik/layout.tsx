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
    <div className="grid grid-cols-12 mx-auto max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
      <div className="w-full flex-none col-span-3 ">
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
          <ul role="list" className="-mx-2 space-y-1">
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
      <div className="flex-grow p-6 md:overflow-y-auto col-span-9">
        {children}
      </div>
    </div>
  );
}
