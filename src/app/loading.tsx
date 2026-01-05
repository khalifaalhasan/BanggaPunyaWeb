import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <LoadingSpinner size="xl" />
      <p className="mt-4 text-slate-500 font-medium animate-pulse">
        Memuat halaman...
      </p>
    </div>
  );
}
