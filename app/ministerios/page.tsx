import { Ministerios } from "@/components/Ministerios";

export default function MinisteriosPage() {
  return (
    <>
      <section className="section-container py-16 pb-0">
        <h1 className="text-4xl font-bold">Ministérios</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Conheça os ministérios e encontre um lugar para servir com propósito.
        </p>
      </section>
      <Ministerios />
    </>
  );
}
