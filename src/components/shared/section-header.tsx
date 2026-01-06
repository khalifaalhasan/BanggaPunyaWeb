import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-2",
        {
          "text-center items-center": align === "center",
          "text-left items-start": align === "left",
          "text-right items-end": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      {/* Dekorasi garis bawah kecil opsional */}
      <div className="mt-4 h-1 w-20 rounded-full bg-red-600" />
    </div>
  );
}
