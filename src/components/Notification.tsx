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
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, onClose]);

  const baseClasses =
    "fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 w-11/12 max-w-md p-4 rounded-lg shadow-lg text-primary-white transition-all";
  const typeClasses = {
    success: "bg-black/90 backdrop-blur-sm border-[.2px] border-white/90",
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
