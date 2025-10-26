export default function ModalFooter({ children }) {
  return (
    <div className="p-4 border-t border-gray-200 flex justify-end gap-2">
      {children}
    </div>
  );
}
