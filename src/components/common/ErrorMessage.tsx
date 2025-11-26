import { AlertCircle } from "lucide-react";
import type { ErrorMessageProps } from "@/types/props";

export const ErrorMessage = ({ message, className = "", id }: ErrorMessageProps) => {
  return (
    <div
      id={id}
      className={`flex items-center gap-2 text-destructive text-sm mt-2 ${className}`}
      role="alert"
      aria-live="polite"
    >
      <AlertCircle className="w-4 h-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
};