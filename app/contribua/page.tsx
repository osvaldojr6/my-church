import { Contribua } from "@/components/Contribua";

export default function ContribuaPage() {
  return (
    <>
      <section className="section-container py-16 pb-0">
        <h1 className="text-4xl font-bold">Contribua</h1>
        <p className="mt-4 max-w-3xl text-zinc-600">
          Obrigado por investir em tudo o que Deus tem feito através da nossa igreja.
        </p>
      </section>
      <Contribua showExtraInfo />
    </>
  );
}
