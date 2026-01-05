"use client";

import Link from "next/link";
import brandingData from "@/data/branding.json"; // Import data
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Mail,
  MapPin,
  Send,
  LucideIcon, // Import Tipe untuk Icon
} from "lucide-react";

// --- 1. DEFINISI TIPE DATA (Type Definitions) ---

// Tipe untuk item navigasi
interface NavigationItem {
  title: string;
  href: string;
}

// Tipe untuk kontak
interface ContactInfo {
  whatsapp: string;
  email: string;
  address: string;
}

// Tipe untuk link sosial media (Key-Value string)
interface SocialLinks {
  [key: string]: string;
}

// Tipe Utama Branding (Sesuai struktur JSON Anda)
interface BrandingConfig {
  brandName: string;
  tagline: string;
  description: string;
  contact: ContactInfo;
  links: SocialLinks;
  navigation: NavigationItem[];
}

// Casting data JSON ke tipe yang sudah didefinisikan
const branding = brandingData as BrandingConfig;

export function Footer() {
  const currentYear = new Date().getFullYear();

  // --- 2. TYPING UNTUK SOCIAL ICONS ---
  // Record<string, LucideIcon> artinya:
  // Key-nya string (misal 'instagram'), Value-nya adalah Komponen Icon Lucide
  const socialIcons: Record<string, LucideIcon> = {
    instagram: Instagram,
    linkedin: Linkedin,
    facebook: Facebook,
    twitter: Twitter,
    github: Github,
    youtube: Youtube,
  };

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-50 font-sans">
      <div className="container max-w-7xl mx-auto px-4">
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* 1. BRAND & CONTACT */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform duration-300">
                {branding.brandName.charAt(0)}
              </div>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {branding.brandName}
              </span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
              {branding.description}
            </p>

            <div className="space-y-3">
              {/* Email */}
              {branding.contact.email && (
                <div className="flex items-center gap-3 text-sm text-slate-600 font-medium group">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                  </div>
                  <a
                    href={`mailto:${branding.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {branding.contact.email}
                  </a>
                </div>
              )}

              {/* WhatsApp */}
              {branding.contact.whatsapp && (
                <div className="flex items-center gap-3 text-sm text-slate-600 font-medium group">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <Send className="w-4 h-4 text-slate-400 group-hover:text-green-600" />
                  </div>
                  <a
                    href={`https://wa.me/${branding.contact.whatsapp.replace(
                      "+",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors"
                  >
                    {branding.contact.whatsapp}
                  </a>
                </div>
              )}

              {/* Alamat */}
              {branding.contact.address && (
                <div className="flex items-center gap-3 text-sm text-slate-600 font-medium group">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                  </div>
                  <span>{branding.contact.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* 2. NAVIGATION (Type Safe Mapping) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-slate-900 text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              {branding.navigation.map((item: NavigationItem, idx: number) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-primary text-sm font-medium transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LAYANAN */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-slate-900 text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              {[
                "Company Profile",
                "Toko Online",
                "Undangan Digital",
                "Web Custom",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-primary text-sm font-medium transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. LEGAL */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-slate-900 text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-slate-500 hover:text-primary text-sm font-medium transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="bg-slate-50 rounded-3xl px-6 py-6 md:px-8 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-100">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            © {currentYear} <strong>{branding.brandName}</strong>. All rights
            reserved.
          </p>

          <div className="flex items-center gap-3">
            {/* Object.entries akan menghasilkan [string, string][] */}
            {Object.entries(branding.links).map(([key, url]) => {
              const iconKey = key.toLowerCase();
              const IconComponent = socialIcons[iconKey]; // Type Safe Access

              if (!IconComponent || !url) return null;

              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  aria-label={key}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
