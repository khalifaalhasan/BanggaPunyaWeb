"use client";

import { SectionHeader } from "../shared/section-header";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// --- 1. DEFINISI TIPE DATA (FIX TYPESCRIPT ERROR) ---
interface Review {
  name: string;
  role: string;
  headline: string;
  content: string;
  rating: number;
}

// --- 2. DATA DUMMY ---
const reviews: Review[] = [
  {
    name: "Sarah T.",
    role: "Business Owner",
    headline: "Sangat Direkomendasikan!",
    content:
      "Platform ini melebihi ekspektasi saya! Fiturnya lengkap dan antarmukanya sangat intuitif.",
    rating: 5,
  },
  {
    name: "Alex M.",
    role: "Project Manager",
    headline: "Pilihan Terbaik",
    content:
      "Saya sudah mencoba banyak jasa pembuatan website, tapi JuraganWeb adalah yang paling stabil.",
    rating: 5,
  },
  {
    name: "Emily P.",
    role: "Freelancer",
    headline: "Support Luar Biasa",
    content:
      "Customer support mereka sangat responsif. Mereka membantu saya step-by-step.",
    rating: 5,
  },
  {
    name: "Kevin R.",
    role: "Software Developer",
    headline: "Wajib Dicoba!",
    content:
      "Sebagai orang teknis, saya menghargai struktur coding mereka yang rapi (SEO Friendly).",
    rating: 5,
  },
  {
    name: "Jessica W.",
    role: "UX/UI Designer",
    headline: "Desain Premium",
    content:
      "Saya sangat picky soal desain, tapi hasil kerja tim ini sangat memuaskan. Clean & modern.",
    rating: 5,
  },
  {
    name: "Brian C.",
    role: "Content Creator",
    headline: "Sangat Membantu",
    content:
      "Integrasi dengan sosial media sangat mulus. Sangat membantu personal branding saya.",
    rating: 5,
  },
];

// --- 3. KOMPONEN KARTU REVIEW ---
const ReviewCard = ({ data }: { data: Review }) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-2xl border p-6",
        "bg-slate-50/80 hover:bg-white hover:shadow-lg hover:border-blue-100",
        "border-slate-100 transition-all duration-300 ease-in-out"
      )}
    >
      <div className="flex flex-row items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < data.rating ? "fill-blue-400 text-blue-400" : "text-gray-200"
            )}
          />
        ))}
      </div>

      <h3 className="text-sm font-bold text-slate-900 mb-2">{data.headline}</h3>

      <blockquote className="text-sm text-slate-600 leading-relaxed mb-4">
        {data.content}
      </blockquote>

      <div className="flex items-center gap-2 pt-4 border-t border-slate-100/50">
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
          {data.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{data.name}</div>
          <div className="text-xs font-medium text-slate-400">{data.role}</div>
        </div>
      </div>
    </figure>
  );
};

// --- 4. MARQUEE COLUMN DENGAN FRAMER MOTION ---
const MarqueeColumn = ({
  reviews,
  duration = 20,
  className,
  reverse = false,
}: {
  reviews: Review[];
  duration?: number;
  className?: string;
  reverse?: boolean;
}) => {
  return (
    <div className={cn("relative h-[600px] overflow-hidden group", className)}>
      <motion.div
        // Logic: Jika reverse (turun), dari -50% ke 0%. Jika normal (naik), dari 0% ke -50%.
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6"
      >
        {/* Render data 2x (Concatenation) untuk efek infinite loop tanpa putus */}
        {[...reviews, ...reviews].map((review, idx) => (
          <ReviewCard key={idx} data={review} />
        ))}
      </motion.div>

      {/* Gradient Overlay Atas & Bawah */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

// --- 5. MAIN SECTION ---
export function TestimonialSection() {
  // Split data jadi 3 kolom
  const firstRow = reviews.slice(0, 2);
  const secondRow = reviews.slice(2, 4);
  const thirdRow = reviews.slice(4, 6);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Apa Kata Mereka?"
          subtitle="Dipercaya oleh ratusan pebisnis di seluruh Indonesia."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {/* KOLOM 1: Naik */}
          <MarqueeColumn reviews={firstRow} duration={15} />

          {/* KOLOM 2: Turun (Reverse) - Hidden di Mobile */}
          <MarqueeColumn
            reviews={secondRow}
            reverse
            duration={18}
            className="hidden md:block"
          />

          {/* KOLOM 3: Naik - Hidden di Tablet */}
          <MarqueeColumn
            reviews={thirdRow}
            duration={16}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
