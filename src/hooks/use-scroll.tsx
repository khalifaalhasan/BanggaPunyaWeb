"use client";

import { useState, useEffect } from "react";

export function useScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cek apakah posisi scroll lebih besar dari threshold
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Tambahkan event listener saat component mount
    window.addEventListener("scroll", handleScroll);

    // Panggil sekali saat mount untuk handle kasus user refresh di tengah halaman
    handleScroll();

    // Cleanup: Hapus event listener saat component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
