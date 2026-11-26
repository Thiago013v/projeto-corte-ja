import { Input } from "@/components/ui/input";

export default function CardsCadasterBarberShop() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2">
      <div className="flex flex-row justify-center items-center w-full h-full gap-6">
        <div className="flex flex-col justify-center items-center gap-2 w-[30%] h-full bg-cards p-6 shadow-md rounded-md">
          <div className="flex flex-col gap-2 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              Nome da Barbearia
            </label>
            <label htmlFor=""></label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              CNPJ
            </label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              CEP
            </label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              Estado
            </label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[30%] h-full bg-cards p-6 shadow-md rounded-md">
          <div className="flex flex-col gap-3 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              Cidade
            </label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              Endereço
            </label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
          <div className="flex flex-col gap-2 w-[70%]">
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              Número de Endereço
            </label>
            <Input className="h-10 bg-surface" id="fullName"></Input>
          </div>
        </div>
      </div>

      <button className="flex flex-row justify-center p-2 bg-secondary text-surface font-bold text-2xl rounded-md hover:bg-hover-secondary cursor-pointer mt-3 w-[25%]">
        Cadastrar Barbearia
      </button>
    </div>
  );
}
