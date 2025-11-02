"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/ai", label: "AI" },
  { href: "/photography", label: "PHOTOGRAPHY" },
  { href: "/books", label: "BOOKS" },
  { href: "/about", label: "ABOUT" }, // ← ändrat
];

export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-neutral-100">
      <div className="container py-4 grid grid-cols-3 items-center">
        <nav className="flex items-center gap-6 text-sm uppercase justify-start">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className={`${pathname===n.href ? "font-semibold" : ""} hover:opacity-80`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-lg font-semibold tracking-[0.3em] uppercase">
        <Link href="/" className="hover:opacity-80">AUGUST ERIKSSON</Link>
        </div>
        <div />
      </div>
    </header>
  );
}
