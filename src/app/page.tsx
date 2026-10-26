import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { IoMdCut } from "react-icons/io";

export default function Page() {
  return (
    <main className="col-start-1 col-end-2 row-start-2 row-end-3">
      <section className="h-full bg-[url('../../public/imagem-secao-hero.jpg')] bg-center bg-cover bg-no-repeat ">
        <div className="h-full flex flex-col justify-center gap-15 ml-15">
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

        <section className="bg-surface flex flex-col justify-center items-center ">
          <h2 className="text-5xl text-secondary font-bold mt-20">
            Procurou, Agendou, Cortou
          </h2>

          <div className="mt-12">
            <div>
              <p className="text-2xl text-primary font-bold text-center">
                Para encontrar a barbearia ideal perto de sua casa
              </p>
              <p className="text-2xl text-primary font-bold text-center">
                Basta apenas seguir os seguintes passos:
              </p>
            </div>

            <div className="flex flex-col mt-12">
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row justify-center items-center bg-cards w-40 h-40 rounded-full">
                  <FaSearch className="text-6xl" />
                </div>
                <div className="w-15 h-5 bg-secondary"></div>
                <div className="flex flex-row justify-center items-center bg-cards w-40 h-40 rounded-full">
                  <GrSchedules className="text-6xl" />
                </div>
                <div className="w-15 h-5 bg-secondary"></div>
                <div className="flex flex-row justify-center items-center bg-cards w-40 h-40 rounded-full">
                  <IoMdCut className="text-6xl" />
                </div>
              </div>

              <div className="flex flex-row gap-30 mt-6">
                <p className="text-secondary text-3xl font-bold">Procurar</p>
                <p className="text-secondary text-3xl font-bold">Agendar</p>
                <p className="text-secondary text-3xl font-bold">Cortar</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
