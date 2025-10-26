export default function ModalHeader({ children }) {
  return (
    <div className="p-4 border-b border-gray-200">
      {typeof children === "string" ? (
        <h2 className="text-xl font-semibold">{children}</h2>
      ) : (
        children
      )}
    </div>
  );
}
