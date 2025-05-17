import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-amber-950">
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca de</Link>
      <Link href="/contact">Contacto</Link>
    </nav>
  );
}
