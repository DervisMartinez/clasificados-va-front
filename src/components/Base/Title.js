import clsx from "clsx";

export default function Title({
  as: Tag = "h2",         // etiqueta de heading por defecto
  size = "3xl",           // tamaño de texto por defecto
  align = "center",       // alineación por defecto
  color = "text-black",   // color de texto por defecto
  fontWeight = "font-bold",
  title,                  // texto del heading
  className,               // clases adicionales opcionales
  decoration = true
}) {
  const sizeClasses = {
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "2xl": "text-2xl",
    "xl": "text-xl",
    "lg": "text-lg",
    "base": "text-base",
    "sm": "text-sm",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const lineAlignClasses = {
    left: "mx-0",
    center: "mx-auto",
    right: "ml-auto mr-0",
  };

  return (
    <div className={clsx(alignClasses[align], className)}>
      <Tag className={clsx(fontWeight, sizeClasses[size], color)}>
        {title}
      </Tag>
      {decoration &&

        <span
          className={clsx(
            lineAlignClasses[align],
            "mt-2 block h-[3px] w-20 rounded-md bg-gradient-to-r from-red-500 to-red-700"
          )}
        />
      }
    </div>
  );
}
