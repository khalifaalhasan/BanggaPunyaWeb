"use client";

import { TypeAnimation } from "react-type-animation";

export function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        // Teks yang akan ditampilkan bergantian
        "Toko Online",
        2000, // Tunggu 2 detik
        "Company Profile",
        2000,
        "Crowdfunding",
        2000,
        "Blog Pribadi",
        2000,
        "Website Donasi",
        2000,
      ]}
      wrapper="span"
      speed={50} // Kecepatan ketik
      repeat={Infinity} // Ulang terus menerus
      className="text-primary bg-white/10 px-2 rounded-md ml-2" // Styling teks berwarna
    />
  );
}
