import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function SectionLoading() {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 m-4">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-sm text-slate-400 font-medium">
        Sedang mengambil data...
      </p>
    </div>
  );
}
