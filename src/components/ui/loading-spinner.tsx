import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LoadingSpinner({
  className,
  size = "md",
}: LoadingSpinnerProps) {
  // Ukuran dinamis
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      {/* 1. Outer Ring (Spinner) */}
      <div className="absolute inset-0 rounded-full border-4 border-slate-200 opacity-30"></div>

      {/* 2. Active Spinner (Dashed/Partial) */}
      <div
        className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent animate-spin"
        style={{ animationDuration: "1.5s" }}
      ></div>

      {/* 3. Center Icon (Static) */}
      <div className="relative z-10 text-primary bg-white rounded-full p-2 shadow-sm">
        <Send
          className={cn(
            "text-primary -ml-0.5 mt-0.5 transform -rotate-45",
            iconSizes[size]
          )}
          fill="currentColor"
        />
      </div>
    </div>
  );
}
