"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StateType } from "../../../lib/states/states";
import {
  SouthEast,
  South,
  CentralWest,
  NorthEast,
  North,
} from "../../../lib/states/states";
import useCadasterBarberShop from "../_hooks/useCadasterBarberShop";
import { ChangeEvent } from "react";
import { cadasterBarberShop } from "@/lib/supabase/barberShop";

export default function CardsCadasterBarberShop() {
  const { Controller, control, errors, handleSubmit, getCep } =
    useCadasterBarberShop();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2">
      <form
        className="flex flex-col justify-center items-center w-full h-full gap-2"
        onSubmit={handleSubmit(cadasterBarberShop)}
      >
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-6">
          <div className="flex flex-col justify-center items-center gap-2 max-sm:w-full max-lg:w-[60%] lg:w-[30%] h-full bg-cards p-6 shadow-md rounded-md">
            <div className="flex flex-col gap-2 w-[70%]">
              <label
                htmlFor="barberShopName"
                className="text-2xl text-secondary font-bold"
              >
                Nome da Barbearia
              </label>

              {errors.barberShopName && (
                <p className="text-red-500">{errors.barberShopName.message}</p>
              )}

              <Controller
                name="barberShopName"
                control={control}
                render={({ field }) => (
                  <input
                    className="h-10 bg-surface rounded-md border border-black p-2"
                    id={field.name}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                  ></input>
                )}
              ></Controller>
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <label
                htmlFor="cnpj"
                className="text-2xl text-secondary font-bold"
              >
                CNPJ
              </label>

              {errors.cnpj && (
                <p className="text-red-500">{errors.cnpj.message}</p>
              )}

              <Controller
                name="cnpj"
                control={control}
                render={({ field }) => (
                  <input
                    className="h-10 bg-surface rounded-md border border-black p-2"
                    id={field.name}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                  ></input>
                )}
              ></Controller>
            </div>

            <div className="flex flex-col gap-2 w-[70%]">
              <label
                htmlFor="cep"
                className="text-2xl text-secondary font-bold"
              >
                CEP
              </label>

              {errors.cep && (
                <p className="text-red-500">{errors.cep.message}</p>
              )}

              <Controller
                name="cep"
                control={control}
                render={({ field }) => (
                  <input
                    className="h-10 bg-surface rounded-md border border-black p-2"
                    id={field.name}
                    name={field.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e.target.value);
                      getCep(e.target.value);
                    }}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                  ></input>
                )}
              ></Controller>
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <label
                htmlFor="name"
                className="text-2xl text-secondary font-bold"
              >
                Estado
              </label>

              {errors.state && (
                <p className="text-red-500">{errors.state.message}</p>
              )}

              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder="Selecione o estado"
                    className="bg-surface"
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                  >
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
                )}
              ></Controller>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 max-sm:w-full max-lg:w-[60%] lg:w-[30%] h-full bg-cards p-6 shadow-md rounded-md">
            <div className="flex flex-col gap-3 w-[70%]">
              <label
                htmlFor="city"
                className="text-2xl text-secondary font-bold"
              >
                Cidade
              </label>

              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}

              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    className="h-10 bg-surface rounded-md border border-black p-2"
                    id={field.name}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                  ></input>
                )}
              ></Controller>
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <label
                htmlFor="address"
                className="text-2xl text-secondary font-bold"
              >
                Endereço
              </label>

              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}

              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <input
                    className="h-10 bg-surface rounded-md border border-black p-2"
                    id={field.name}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                  ></input>
                )}
              ></Controller>
            </div>
            <div className="flex flex-col gap-2 w-[70%]">
              <label
                htmlFor="numberAddress"
                className="text-2xl text-secondary font-bold"
              >
                Número de Endereço
              </label>

              {errors.numberAddress && (
                <p className="text-red-500">{errors.numberAddress.message}</p>
              )}

              <Controller
                name="numberAddress"
                control={control}
                render={({ field }) => (
                  <input
                    className="h-10 bg-surface rounded-md border border-black p-2"
                    id={field.name}
                    name={field.name}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                  ></input>
                )}
              ></Controller>
            </div>
          </div>
        </div>

        <button className="flex flex-row justify-center p-2 bg-secondary text-surface font-bold text-2xl rounded-md hover:bg-hover-secondary cursor-pointer mt-3 max-sm:w-[90%] max-lg:w-[50%] lg:w-[25%] max-lg:mb-4">
          Cadastrar Barbearia
        </button>
      </form>
    </div>
  );
}
