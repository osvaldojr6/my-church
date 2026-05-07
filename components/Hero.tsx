import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center">
      <div className="bg-black/50">
        <div className="section-container py-28 text-white sm:py-36">
          <p className="text-sm uppercase tracking-[0.2em]">Bem-vindo</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            Um lugar para crescer na fé, servir e viver em comunidade.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-zinc-100 sm:text-lg">
            Cultos, ministérios e eventos para toda a família durante a semana.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/agenda" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
              Ver Agenda
            </Link>
            <Link href="/contato" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
              Falar Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
