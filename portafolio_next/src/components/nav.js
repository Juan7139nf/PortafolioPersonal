"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const ocultarNavbar = ["/", "/error"].includes(pathname);

  if (ocultarNavbar) return null;

  return (
    <nav className="flex gap-4 p-4 bg-amber-950">
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca de</Link>
      <Link href="/contact">Contacto</Link>
    </nav>
  );
}
