import { Metadata } from "next";
import { Construction, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Under Maintenance",
  robots: {
    index: false, // Penting: Jangan sampai Google mengindeks halaman maintenance
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <Card className="w-full max-w-lg shadow-xl relative z-10 backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Construction className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Sedang Dalam Pengembangan
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Website ini sedang dibangun. Silakan kembali lagi nanti.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 mt-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-center text-muted-foreground">
              Notify me when available:
            </p>
            <form
              className="flex space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="email@anda.com"
                className="flex-1"
              />
              <Button type="submit">Kirim</Button>
            </form>
          </div>

          <div className="flex items-center gap-4 my-6">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground uppercase">
              Info
            </span>
            <Separator className="flex-1" />
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Developer?{" "}
            <a href="/login" className="underline hover:text-primary">
              Login Admin
            </a>
          </div>
        </CardContent>

        <CardFooter className="bg-slate-50 dark:bg-slate-900/50 flex justify-center py-4 rounded-b-lg">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Project Name.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
