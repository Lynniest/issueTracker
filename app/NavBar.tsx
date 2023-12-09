"use client";

import React from 'react';
import Link from 'next/link';
import {PiBugFill} from "react-icons/pi";
import { usePathname } from 'next/navigation';
const navItems = [
    {
        label: "Dashboard",
        href: "/",
    },
    {
        label: "Issues",
        href: "/issues",
    }
]

const NavBar = () => {

    const pathname = usePathname();

    return (
    <nav className='flex space-x-10 border-2 bg-red-300 mb-5 px-5 h-14 items-center'>
        <Link href={"/"}> <PiBugFill /> </Link>
        <ul className='flex space-x-10'>
            {navItems.map( (item)=>
                <li>
                    <Link key={item.label} className={`${item.href === pathname ? 'text-zinc-900' : 'text-zinc-500 ' }  hover:text-zinc-800 transition-colors`} href={item.href}>
                        {item.label}
                    </Link>
                </li>
            )}

        </ul>

    </nav>
  )
}

export default NavBar
