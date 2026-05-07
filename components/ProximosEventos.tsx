const eventos = [
  { titulo: "Culto de Celebração", data: "Domingo - 10h e 18h" },
  { titulo: "Encontro de Jovens", data: "Sexta - 19h30" },
  { titulo: "Reunião de Oração", data: "Quarta - 20h" },
];

export function ProximosEventos() {
  return (
    <section id="eventos" className="py-16">
      <div className="section-container">
        <h2 className="text-3xl font-bold">Próximos Eventos</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {eventos.map((evento) => (
            <article key={evento.titulo} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary">{evento.titulo}</h3>
              <p className="mt-2 text-zinc-600">{evento.data}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
