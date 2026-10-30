import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StateType } from "../_states/states";
import {
  SouthEast,
  South,
  CentralWest,
  NorthEast,
  North,
} from "../_states/states";

export default function Aside() {
  return (
    <aside className="flex flex-col gap-6 justify-center items-center col-start-1 col-end-2 row-start-1 row-end-2">
      <h1 className="text-3xl text-secondary font-semibold">
        Busque a Barbearia desejada
      </h1>
      <div className="flex flex-col gap-6 bg-cards p-8 rounded-md shadow-2xl">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-secondary font-semibold text-2xl"
          >
            Nome
          </label>
          <Input
            placeholder="Digite o nome da barbearia"
            className="h-8 bg-surface"
            id="name"
            name="name"
          ></Input>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="state"
            className="text-secondary font-semibold text-2xl"
          >
            Estado
          </label>
          <Select placeholder="Selecione o estado" className="bg-surface">
            <SelectTrigger>
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent className="shadow-md bg-surface">
              <SelectGroup>
                <SelectLabel className="text-zinc-400 font-bold">
                  Norte
                </SelectLabel>
                {North.map((currentState: StateType) => (
                  <SelectItem
                    key={currentState.value}
                    id={currentState.value}
                    className="hover:bg-hover-secondary"
                  >
                    {currentState.state}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="text-zinc-400 font-bold">
                  Nordeste
                </SelectLabel>
                {NorthEast.map((currentState: StateType) => (
                  <SelectItem
                    key={currentState.value}
                    id={currentState.value}
                    className="hover:bg-hover-secondary"
                  >
                    {currentState.state}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="text-zinc-400 font-bold">
                  Centro-Oeste
                </SelectLabel>
                {CentralWest.map((currentState: StateType) => (
                  <SelectItem
                    key={currentState.value}
                    id={currentState.value}
                    className="hover:bg-hover-secondary"
                  >
                    {currentState.state}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="text-zinc-400 font-bold">
                  Sudeste
                </SelectLabel>
                {SouthEast.map((currentState: StateType) => (
                  <SelectItem
                    key={currentState.value}
                    id={currentState.value}
                    className="hover:bg-hover-secondary"
                  >
                    {currentState.state}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="text-zinc-400 font-bold">
                  Sul
                </SelectLabel>
                {South.map((currentState: StateType) => (
                  <SelectItem
                    key={currentState.value}
                    id={currentState.value}
                    className="hover:bg-hover-secondary"
                  >
                    {currentState.state}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="city"
            className="text-secondary font-semibold text-2xl"
          >
            Cidade
          </label>
          <Input
            placeholder="Digite o nome da cidade"
            className="h-8 bg-surface"
            id="city"
            name="city"
          ></Input>
        </div>

        <button className="text-2xl text-surface font-bold bg-secondary p-1 cursor-pointer hover:bg-hover-secondary rounded-md">
          Buscar
        </button>
      </div>
    </aside>
  );
}
