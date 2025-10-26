// app/RadioPlayerProvider.jsx
"use client";
import { createContext, useContext, useRef, useState } from "react";

const RadioContext = createContext();

export function RadioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const streamUrl = "https://transmision.raenlinea.com:8087/RA909FM";

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
        audioRef.current.load()
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (v) => {
    if (!audioRef.current) return;
    audioRef.current.volume = v;
    setVolume(v);
  };

  return (
    <RadioContext.Provider value={{ isPlaying, togglePlay, volume, changeVolume }}>
      {children}
      <audio ref={audioRef} src={streamUrl} preload="none" />
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}
