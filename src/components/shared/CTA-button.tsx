// components/CTAButton.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Sesuaikan path komponen Shadcn Anda
import { cn } from "@/lib/utils"; // Utility standard Shadcn untuk merge class

interface CTAButtonProps extends React.ComponentProps<typeof Button> {
  href?: string; // Opsional: jika diisi, jadi Link
  target?: string; // Opsional: misal "_blank"
}

export function CTAButton({
  href,
  className,
  children,
  target,
  ...props
}: CTAButtonProps) {
  // Style default yang Anda inginkan (Emas)
  // Note: Saya hapus 'hover:bg-slate-800' karena background-image (gradient)
  // biasanya menimpa background-color. Untuk hover efek, saya sarankan
  // 'hover:brightness-110' (makin kinclong) atau 'hover:opacity-90'.
  const baseStyles =
    "rounded-full bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 text-slate-900 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:brightness-110 border-0 font-bold";

  // Jika ada href, render sebagai Link (Next.js Link)
  if (href) {
    return (
      <Button
        asChild
        size="lg"
        className={cn(baseStyles, className)}
        {...props}
      >
        <Link href={href} target={target}>
          {children}
        </Link>
      </Button>
    );
  }

  // Jika tidak ada href, render sebagai Button biasa (untuk action/onClick)
  return (
    <Button size="lg" className={cn(baseStyles, className)} {...props}>
      {children}
    </Button>
  );
}
