const ministerios = ["Infantil", "Jovens", "Louvor", "Casais", "Ação Social", "Intercessão"];

export function Ministerios() {
  return (
    <section id="ministerios" className="bg-white py-16">
      <div className="section-container">
        <h2 className="text-3xl font-bold">Ministérios</h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Faça parte de um ministério e use seus dons para servir pessoas e glorificar a Deus.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ministerios.map((item) => (
            <div key={item} className="rounded-2xl border border-zinc-200 p-6 text-lg font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
