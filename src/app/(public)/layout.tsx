import { Footer } from "@/components/layouts/footer";
import { FloatingHeader } from "@/components/layouts/navbar/floating-header.tsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {/* Pasang Header Floating di sini */}
        <FloatingHeader />

        {children}
        <Footer />
      </body>
    </html>
  );
}
