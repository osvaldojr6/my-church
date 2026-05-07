import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="section-container flex flex-col justify-between gap-6 text-sm text-zinc-600 md:flex-row">
        <p>© {new Date().getFullYear()} My Church. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link href="/agenda" className="hover:text-primary">
            Agenda
          </Link>
          <Link href="/ministerios" className="hover:text-primary">
            Ministérios
          </Link>
          <Link href="/contato" className="hover:text-primary">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
