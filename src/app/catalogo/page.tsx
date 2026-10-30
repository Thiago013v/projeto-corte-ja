import Aside from "./_components/Aside";
import CardBarber from "./_components/CardBarber";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Catalogo() {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-[0.5fr_1fr] lg:grid-rows-[1fr]">
      <Aside></Aside>
      <section className="flex flex-col gap-4 justify-center items-center col-start-2 col-end-3 row-start-1 row-end-2">
        <ul className="flex flex-row justify-center items-center flex-wrap gap-4">
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
        </ul>

        <ButtonGroup className="max-md:mb-6">
          <Button className="bg-surface cursor-pointer shadow-md p-5 hover:text-surface hover:bg-hover-secondary">
            <FaArrowLeft />
          </Button>
          <Button className="bg-surface cursor-pointer shadow-md p-5 hover:text-surface hover:bg-hover-secondary">
            <FaArrowRight />
          </Button>
        </ButtonGroup>
      </section>
    </main>
  );
}
