'use client';

import { LiaBell } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

import Navigation from './Menu/Navigation';
import SearchBar from './SearchBar';
import ProfileDropdown from "../ProfileDropdown";
import NotificationDrawer from "./Notifications/NotificationDrawer";

import { useNotifications } from "@/hooks/useNotifications";
import { useAuth } from "@/context/AuthContext";

import { useMenu } from "@/context/MenuContext";

import { useRadio } from "@/context/RadioPlayerProvider";

import { FaPlay, FaPause } from "react-icons/fa6";

function Logo() {
    return (
        <Image
            src="/logo-ra.png"
            alt="Logo"
            height={100}
            width={100}
            priority
        />
    );
}

export default function Header() {

    const { isNotifOpen, toggleNotif, closeNotif } = useMenu();

    const { isPlaying, togglePlay, volume, changeVolume } = useRadio();



    // Notificaciones
    const { user } = useAuth();
    const { notifications } = useNotifications();
    const unreadCount = user
        ? Array.isArray(notifications)
            ? notifications.filter(n => !n.read_at).length
            : 0
        : 0;

    return (
        <>


            <header className="bg-white border-b ">
                <div className="container mx-auto py-3 max-w-6xl">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <Logo className="h-12" />
                                <div>
                                    <span className="ml-2 text-3xl font-bold text-gray-800 block">
                                        Radio América
                                    </span>
                                    <span className="ml-2 text-md font-light text-red-600">
                                        Clasificados
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Zona derecha */}
                        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
                            <SearchBar />
                            <ProfileDropdown />

                            {/* Botón campana */}
                            <button
                                onClick={toggleNotif}
                                className="relative cursor-pointer p-1 ml-4 text-gray-800 hover:bg-gray-100 rounded-full transition-colors focus:ring-0 focus:outline-none"
                            >
                                <LiaBell size="2rem" />

                                {unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                                        {unreadCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />

            <div className="w-full px-4 py-2 bg-red-500">
                <div className="w-full md:max-w-6xl mx-auto">
                    <div className="flex items-center justify-between  text-white text-xs sm:text-sm md:text-base lg:text-lg">
                        {/* Left Section */}
                        <span className="flex items-center gap-1 md:gap-3 font-extralight">
                            <button
                                onClick={togglePlay}
                                className="p-1 rounded-full bg-red-300 hover:bg-red-400 transition-colors"
                            >
                                {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
                            </button>
                            Sintonízanos <span className="font-bold">90.9 FM</span>
                        </span>

                        {/* Right Section */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/@estudioradioamericave"
                            className="flex items-center gap-2 whitespace-nowrap hover:underline"
                        >
                            <FaYoutube size={15} />
                            Estudio Radio América
                        </a>
                    </div>
                </div>
            </div>

            <NotificationDrawer
                isOpen={isNotifOpen}
                onClose={toggleNotif}
            />


        </>
    );
}
