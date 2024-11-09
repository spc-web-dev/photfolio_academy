'use client'
import { NavbarData } from "@/lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavbarLeftSmallScreen from "./navbar-left-small-screen"



function NavbarLeft() {
    const pathname = usePathname()
  return (
    <div>
        <ul className="md:flex items-center gap-4 hidden">
            {NavbarData.map(nav=>(
                <li key={nav.id}>
                    <Link href={nav.link} className={`capitalize text-[14px]  hover:text-slate-900 dark:hover:text-slate-300 ${pathname === nav.link ? 'text-slate-900 dark:text-white': 'text-slate-500 dark:text-slate-400'}`}>{nav.name}</Link>
                </li>
            ))}
        </ul>
        <NavbarLeftSmallScreen />
    </div>
  )
}

export default NavbarLeft