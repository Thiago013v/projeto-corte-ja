import Rating from "@mui/material/Rating";
import { LiaStarSolid } from "react-icons/lia";
import Image from "next/image";
import teste from "../../../../public/imagem-secao-hero.jpg";

export default function CardBarber() {
  return (
    <div className="flex flex-col max-w-62 bg-primary p-4 rounded-md shadow-md">
      <Image src={teste} alt="teste" width={200}></Image>

      <div>
        <h3 className="text-surface font-bold text-2xl">Barbearia</h3>
        <p className="text-zinc-400 font-bold">Santos, SP</p>
      </div>

      <Rating
        readOnly={true}
        value={3}
        icon={<LiaStarSolid />}
        emptyIcon={<LiaStarSolid className="text-zinc-300" />}
        className="self-end"
      ></Rating>
    </div>
  );
}
