"use client";
import { useState, useRef, useEffect } from "react";
import { useRadio } from "@/context/RadioPlayerProvider";
import { FaVolumeHigh, FaPlay, FaPause, FaVolumeOff } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function RadioPlayer() {

  const { isPlaying, togglePlay, volume, changeVolume } = useRadio();
  const [showVolume, setShowVolume] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const volumeRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    setShowPlayer(false); // inicia oculto

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowPlayer(true);
      } else {
        setShowPlayer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Cerrar volumen al click fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (volumeRef.current && !volumeRef.current.contains(e.target)) {
        setShowVolume(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      className={`fixed  md:top-auto bottom-4 left-4 flex items-center gap-3 bg-red-500 text-white shadow-lg rounded-full px-4 py-2 z-50 transition-all duration-300
        ${pathname === "/" ? (showPlayer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none") : "opacity-100 translate-y-0"}`}
    >
      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        className="p-2 rounded-full bg-red-300 hover:bg-red-400"
      >
        {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>

      <p className="text-xs font-medium">90.9 FM</p>

      {/* Volumen */}
      <div className="hidden md:block relative" ref={volumeRef}>
        <button
          onClick={() => setShowVolume(!showVolume)}
          className="p-2 rounded-full bg-red-300 hover:bg-red-400"
        >
          {volume === 0 ? <FaVolumeOff size={18} /> : <FaVolumeHigh size={18} />}
        </button>

        <div
          className={`absolute bottom-12 right-1 flex justify-center transition-all duration-200
            ${showVolume ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none"}`}
        >
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => changeVolume(parseFloat(e.target.value))}
            className="h-24 w-6 accent-red-500 cursor-pointer [writing-mode:vertical-lr] rotate-180"
          />
        </div>
      </div>
    </div>
  );
}
