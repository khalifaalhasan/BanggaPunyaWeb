import { Monitor, ShoppingCart, Heart, User } from "lucide-react";

export const navItems = [
  {
    title: "Company Profile",
    href: "/services/company",
    description: "Tingkatkan citra profesional perusahaan Anda.",
    icon: <Monitor className="w-6 h-6 text-primary" />,
  },
  {
    title: "Toko Online",
    href: "/services/ecommerce",
    description: "Jual produk Anda ke seluruh dunia 24/7.",
    icon: <ShoppingCart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Web Donasi",
    href: "/services/donation",
    description: "Platform galang dana terpercaya & transparan.",
    icon: <Heart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Blog Personal",
    href: "/services/blog",
    description: "Bagikan cerita dan portofolio karya Anda.",
    icon: <User className="w-6 h-6 text-primary" />,
  },
];
