"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/agenda", label: "Agenda" },
  { href: "/ministerios", label: "Ministérios" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          My Church
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contribua"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-900"
          >
            Contribua
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-md p-2 text-zinc-700 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="section-container flex flex-col gap-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contribua"
              className="inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Contribua
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
