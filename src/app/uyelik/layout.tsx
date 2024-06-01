"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const navigation = (handleLogout) => [
  { name: "Seyahatlerim", href: "/uyelik/seyahatlerim" },
  { name: "Rezervasyonlarım", href: "/uyelik/rezervasyonlarim" },
  { name: "Kuponlarım", href: "/uyelik/kuponlarim" },
  { name: "Profilim", href: "/uyelik/profilim" },
  { name: "Çıkış Yap", href: "/auth/login", onClick: handleLogout },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    router.push("/auth/login");
    window.location.reload();
  };

  useEffect(() => {
    if (
      localStorage.getItem("id") === "null" &&
      !localStorage.getItem("id") &&
      sessionStorage.getItem("id") === "null" &&
      !sessionStorage.getItem("id")
    ) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <div className="grid grid-cols-12 mx-auto max-w-7xl justify-between gap-x-6 lg:px-8">
      <div className="flex-none lg:col-span-2 hidden lg:flex col-span-12">
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
          <ul role="list" className="-mx-2 space-y-1">
            {navigation(handleLogout).map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={item.onClick}
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
      <div className="flex-grow md:overflow-y-auto lg:col-span-10 col-span-12">
        {children}
      </div>
    </div>
  );
}
