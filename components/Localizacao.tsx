export function Localizacao() {
  return (
    <section id="localizacao" className="py-16">
      <div className="section-container grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Localização</h2>
          <p className="mt-3 text-zinc-600">Av. Principal, 1000 - Centro, São Paulo - SP</p>
          <p className="mt-2 text-zinc-600">Domingo: 10h e 18h | Quarta: 20h</p>
        </div>
        <iframe
          title="Mapa da igreja"
          className="h-72 w-full rounded-2xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Av.%20Principal%201000%20S%C3%A3o%20Paulo&output=embed"
        />
      </div>
    </section>
  );
}
