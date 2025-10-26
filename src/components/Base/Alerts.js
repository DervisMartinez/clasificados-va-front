import React from 'react';
import {
  LuCircleCheck,
  LuCircleX,
  LuInfo,
  LuCircleAlert,
  LuX,
} from 'react-icons/lu';

const iconMap = {
  success: <LuCircleCheck className="text-green-600 shrink-0" />,
  danger: <LuCircleX className="text-red-600 shrink-0" />,
  info: <LuInfo className="text-blue-600 shrink-0" />,
  warning: <LuCircleAlert className="text-yellow-600 shrink-0" />,
};

export default function Alert({ type = 'info', message, onClose }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 p-4 rounded-md border
        ${type === 'success' ? 'bg-green-50 border-green-200' : ''}
        ${type === 'danger' ? 'bg-red-50 border-red-200' : ''}
        ${type === 'info' ? 'bg-blue-50 border-blue-200' : ''}
        ${type === 'warning' ? 'bg-yellow-50 border-yellow-200' : ''}
      `}
    >
      <div className="flex items-center gap-2">
        {iconMap[type]}
        <span className="text-sm text-left text-gray-800">{message}</span>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <LuX />
        </button>
      )}
    </div>
  );
}