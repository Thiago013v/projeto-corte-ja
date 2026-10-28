export default function Catalogo() {
  return (
    <main className="grid grid-cols-[0.5fr_1fr] grid-rows-[1fr]">
      <aside className="flex flex-col justify-center items-center bg-red-500 col-start-1 col-end-2 row-start-1 row-end-2">
        <h1 className="text-2xl text-secondary font-semibold">
          Busque a Barbearia desejada
        </h1>
        <div className="flex flex-col bg-cards">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              placeholder="Digite o nome da barbearia"
              className="bg-surface shadow-md"
            />
          </div>
        </div>
      </aside>
      <div className="bg-blue-500 col-start-2 col-end-3 row-start-1 row-end-2">
        <h1>DIV 2</h1>
      </div>
    </main>
  );
}
