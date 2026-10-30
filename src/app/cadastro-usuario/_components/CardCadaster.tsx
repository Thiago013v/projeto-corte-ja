"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";

export default function CardCadaster() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-cards w-[95%] max-sm:mt-5 lg:w-[30%] p-6 shadow-md rounded-md">
      <h1 className="text-5xl text-secondary font-bold mb-4">Cadastro</h1>

      <div className="flex flex-col gap-2 w-[70%]">
        <label htmlFor="name" className="text-2xl text-secondary font-bold">
          Nome
        </label>
        <Input className="h-10 bg-surface" name="name" id="name"></Input>
      </div>
      <div className="flex flex-col gap-2 w-[70%]">
        <label htmlFor="email" className="text-2xl text-secondary font-bold">
          Email
        </label>
        <Input className="h-10 bg-surface" name="email" id="email"></Input>
      </div>
      <div className="flex flex-col gap-2 w-[70%]">
        <label htmlFor="password" className="text-2xl text-secondary font-bold">
          Senha
        </label>
        <ButtonGroup className="w-full">
          <Input
            className="h-10 bg-surface"
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
          ></Input>
          <Button
            className="bg-surface shadow-md h-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-2 w-[70%]">
        <label
          htmlFor="confirm-password"
          className="text-2xl text-secondary font-bold"
        >
          Confirmar Senha
        </label>
        <ButtonGroup className="w-full">
          <Input
            className="h-10 bg-surface"
            name="confirm-password"
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
          ></Input>
          <Button
            className="bg-surface shadow-md h-10"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
          </Button>
        </ButtonGroup>
      </div>

      <button className="p-2 bg-secondary text-surface font-bold text-3xl rounded-md hover:bg-hover-secondary cursor-pointer w-[70%] mt-3">
        Cadastrar
      </button>

      <p className="text-zinc-400 mt-2">
        Já tem uma conta?{" "}
        <Link className="text-secondary font-bold" href="/login">
          Faça Login
        </Link>
      </p>
    </div>
  );
}
