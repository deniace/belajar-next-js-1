"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavLink({ base_url }) {
    const [navOpen, setNavOpen] = useState(false);
    let navHidden = "hidden";
    if (navOpen) {
        navHidden = "w-full md:block md:w-auto";
    } else {
        navHidden = "hidden w-full md:block md:w-auto";
    }

    return (
        <div
            // className="{navHidden} w-full md:block md:w-auto"
            className={navHidden}
            id="navbar-default"
        >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link
                        href={`/home`}
                        className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <a
                        href="/kopi"
                        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Kopi
                    </a>
                </li>

                <li>
                    <a
                        href="/kamu/aku"
                        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        kamu aku
                    </a>
                </li>
            </ul>
        </div>
    );
}
