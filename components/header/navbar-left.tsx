"use client";
import { NavbarData } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarLeftSmallScreen from "./navbar-left-small-screen";


function NavbarLeft() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-4 relative">
      <NavbarLeftSmallScreen />
      <h1
          className="text-lg text-white animate-logoAnimation font-[family-name:var(--font-geist-mono)]"
          style={{
            paintOrder: "stroke fill",
            display: "inline-block",
            letterSpacing: "-0.15ch",
            WebkitTextStroke: "5px gray",
          }}
        >
          LA RESSANN
        </h1>
      <ul className="md:flex items-center gap-4 hidden">
        {NavbarData.map((nav) => (
          <li key={nav.id}>
            <Link
              href={nav.link}
              className={`capitalize text-[14px]  hover:text-slate-900 dark:hover:text-slate-300 ${
                pathname === nav.link
                  ? "text-blue-500 dark:text-blue-500"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {nav.name}
            </Link>
          </li>
        ))}
        <li >
            <Link
              href={'/dashboard'}
              className={`capitalize text-[14px]  hover:text-slate-900 dark:hover:text-slate-300 ${
                pathname === 'dashboard'
                  ? "text-blue-500 dark:text-blue-500"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              Dashboard
            </Link>
          </li>
      </ul>
    </div>
  );
}

export default NavbarLeft;
