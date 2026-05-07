import { Contribua } from "@/components/Contribua";
import { Hero } from "@/components/Hero";
import { Localizacao } from "@/components/Localizacao";
import { Ministerios } from "@/components/Ministerios";
import { ProximosEventos } from "@/components/ProximosEventos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProximosEventos />
      <Ministerios />
      <Localizacao />
      <Contribua />
    </>
  );
}
