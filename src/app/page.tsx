import Link from "next/link";

export default function Page() {
  return (
    <main className="col-start-1 col-end-2 row-start-2 row-end-3">
      <section className="h-full bg-[url('../../public/imagem-secao-hero.jpg')] bg-center bg-cover bg-no-repeat p-20">
        <div className="h-full flex flex-col justify-center gap-15">
          <h1 className="text-8xl text-secondary font-bold">CorteJá</h1>
          <div>
            <p className="text-4xl text-secondary font-bold">
              Encontre a Barbearia ideal
            </p>
            <p className="text-4xl text-secondary font-bold">perto de você</p>
          </div>
          <Link
            href="/catalogo"
            className="bg-secondary text-surface pt-5 pb-5 pr-8 pl-8 text-3xl rounded-sm max-w-[201.85] hover:bg-hover-secondary"
          >
            Encontrar
          </Link>
        </div>
      </section>
    </main>
  );
}
