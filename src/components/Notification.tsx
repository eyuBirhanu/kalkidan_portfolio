// src/components/Notification.tsx
import { useEffect } from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Notification({
  message,
  type,
  onClose,
}: NotificationProps) {
  // Automatically close the notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5000ms = 5 seconds

    // This is a cleanup function. It runs if the component is removed.
    // This prevents errors if the user closes it manually before 5s.
    return () => {
      clearTimeout(timer);
    };
  }, [message, onClose]); // Rerun the effect if the message changes

  // Determine styles based on the 'type' prop
  const baseClasses =
    "fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 w-11/12 max-w-md p-4 rounded-lg shadow-lg text-primary-white transition-all";
  const typeClasses = {
    success: "bg-green-500/90 backdrop-blur-sm",
    error: "bg-red-500/90 backdrop-blur-sm",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <p className="font-semibold">{message}</p>
      <button onClick={onClose} className="text-white hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
