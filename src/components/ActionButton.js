import Link from "next/link";

const variantStyles = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
  danger:
    "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  neutral:
    "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300",
};

export default function ActionButton({
  label,
  onClick,
  href,
  variant = "neutral",
  target,
  className = "",
}) {
  const baseStyles = `inline-flex items-center px-2 py-1 rounded-md text-xs font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link className={baseStyles} href={href} target={target}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`cursor-pointer ${baseStyles}`}>
      {label}
    </button>
  );
}
