import { Input } from "@/components/ui/input";

export default function SecondCardCadasterBarberShop() {
  return (
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
  );
}
