"use client";
import { useMenu } from "@/context/MenuContext";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SearchBar from "../SearchBar";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { LiaBell } from "react-icons/lia";


export default function Navigation() {
    const { isOpen, toggleMenu, toggleNotif } = useMenu();

    return (
        <nav className="bg-white ">
            <div className="container mx-auto px-4 py-2 max-w-6xl border-black ">
                <div className="flex items-center justify-between ">
                    {/* Mobile Menu Button */}

                    <button
                        onClick={toggleMenu}
                        className="md:hidden mr-2 rounded-md focus:outline-none  focus:ring-gray-400 transition"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <IoClose size="1.5rem" /> : <IoMenuOutline size="1.5rem" />}
                    </button>

                    {/* Mobile Search */}
                    <SearchBar className="md:hidden" />

                    <DesktopMenu />

                    <button
                        onClick={toggleNotif}
                        className="md:hidden ml-2 rounded-md focus:outline-none  focus:ring-gray-400 transition"
                        aria-label="Toggle Menu"
                    >
                        <LiaBell size="1.5rem" />
                    </button>

                </div>
            </div>

            {/* Mobile Drawer */}

            <MobileMenu />



        </nav>
    );
}
