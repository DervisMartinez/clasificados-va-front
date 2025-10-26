import Link from "next/link";
import DotsLoader from "./Loaders/Dots";
import * as LuIcons from "react-icons/lu";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Button({
  label,
  type = "button",
  href,
  nav = true,
  className = "",
  borderColor = "border-red-600",
  bgColor = "bg-red-600",
  textColor = "text-white",
  hoverBg = "hover:bg-red-700",
  focusRing = "focus:ring-red-300",
  outline = false,
  loading = false,
  disabled = false,
  icon = null,
  ...props
}) {
  let IconComponent = icon ? LuIcons[icon] : null;

  if (icon === "Instagram") IconComponent = FaInstagram;
  if (icon === "Facebook") IconComponent = FaFacebook;
  if (icon === "Youtube") IconComponent = FaYoutube;
  if (icon === "Tiktok") IconComponent = FaTiktok;
  if (icon === "Whatsapp") IconComponent = FaWhatsapp;

  const baseStyles =
    "rounded-md border-2 px-8 py-2 transition duration-150 ease-in-out inline-block text-center focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = outline
    ? `bg-white ${textColor} ${borderColor} ${hoverBg}`
    : `${bgColor} ${textColor} ${borderColor} ${hoverBg}`;

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  const classes = `${baseStyles} ${variantStyles} ${focusRing} ${disabledStyles} ${className}`;

  const content = (
    <span className="flex justify-center items-center gap-2">
      {IconComponent && <IconComponent className="w-5 h-5" />}
      <span>{label}</span>
      {loading && <DotsLoader />}
    </span>
  );

  if (href && nav) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}