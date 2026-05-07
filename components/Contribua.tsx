type ContribuaProps = {
  showExtraInfo?: boolean;
};

export function Contribua({ showExtraInfo = false }: ContribuaProps) {
  return (
    <section id="contribua" className="bg-primary py-16 text-white">
      <div className="section-container">
        <h2 className="text-3xl font-bold">Contribua</h2>
        <p className="mt-3 max-w-2xl text-zinc-100">
          Sua contribuição ajuda a sustentar projetos missionários, ações sociais e a estrutura da igreja.
        </p>
        <div className="mt-8 rounded-2xl bg-white/10 p-6">
          <p className="text-sm uppercase tracking-wider">Chave Pix</p>
          <p className="mt-1 text-lg font-semibold">contribua@mychurch.org.br</p>
        </div>
        {showExtraInfo && (
          <div className="mt-6 space-y-2 text-zinc-100">
            <p>Banco Exemplo - Agência 0001 - Conta Corrente 12345-6</p>
            <p>Para comprovantes e dúvidas: financeiro@mychurch.org.br</p>
          </div>
        )}
      </div>
    </section>
  );
}
