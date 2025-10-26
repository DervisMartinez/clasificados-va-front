// components/IconButton.jsx
"use client";
import * as LuIcons from "react-icons/lu";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function IconButton({
  bgColor = "bg-gray-200",
  hoverBg = "hover:bg-gray-300",
  textColor = "text-gray-700",
  size = "p-2",
  shadow = "shadow",
  icon = null,
  href = null,
  onClick = () => {}, // acción por defecto
}) {
  let Icon = icon && LuIcons[icon] ? LuIcons[icon] : LuIcons.LuBlocks;

  if (icon === "Instagram") Icon = FaInstagram;
  if (icon === "Facebook") Icon = FaFacebook;
  if (icon === "Youtube") Icon = FaYoutube;
  if (icon === "Twitter") Icon = FaXTwitter;
  if (icon === "Tiktok") Icon = FaTiktok;
  if (icon === "Whatsapp") Icon = FaWhatsapp;

  const classes = `${size} cursor-pointer rounded-full ${bgColor} ${hoverBg} ${shadow} flex items-center justify-center`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <Icon className={`w-5 h-5 ${textColor}`} />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      <Icon className={`w-5 h-5 ${textColor}`} />
    </button>
  );
}
