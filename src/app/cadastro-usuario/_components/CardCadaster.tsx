"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { useCadaster } from "../_hooks/useCadaster";
import CardConfirmationEmail from "./CardConfirmationEmail";

export default function CardCadaster() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const { Controller, control, handleSubmit, onSubmit, errors } = useCadaster();

  return <CardConfirmationEmail></CardConfirmationEmail>;

  /*
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-cards w-[95%] max-sm:mt-5 lg:w-[30%] p-6 shadow-md rounded-md">
      <h1 className="text-5xl text-secondary font-bold mb-4">Cadastro</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full gap-3"
      >
        <div className="flex flex-col gap-2 w-[70%]">
          <div className="flex flex-col">
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName.message}</span>
            )}
            <label htmlFor="name" className="text-2xl text-secondary font-bold">
              Nome Completo
            </label>
          </div>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                className="h-10 bg-surface"
                name={field.name}
                id="fullName"
                defaultValue={field.value}
                ref={field.ref}
                onChange={field.onChange}
                onBlur={field.onBlur}
              ></Input>
            )}
          ></Controller>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <div className="flex flex-col">
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label
              htmlFor="email"
              className="text-2xl text-secondary font-bold"
            >
              Email
            </label>
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                className="h-10 bg-surface"
                name={field.name}
                id="email"
                defaultValue={field.value}
                ref={field.ref}
                onChange={field.onChange}
                onBlur={field.onBlur}
              ></Input>
            )}
          ></Controller>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <div className="flex flex-col">
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <label
              htmlFor="password"
              className="text-2xl text-secondary font-bold"
            >
              Senha
            </label>
          </div>
          <ButtonGroup className="w-full">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  className="h-10 bg-surface"
                  name={field.name}
                  id="password"
                  defaultValue={field.value}
                  ref={field.ref}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  type={showPassword ? "text" : "password"}
                ></Input>
              )}
            ></Controller>
            <Button
              className="bg-surface shadow-md h-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <div className="flex flex-col">
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
            <label
              htmlFor="confirm-password"
              className="text-2xl text-secondary font-bold"
            >
              Confirmar Senha
            </label>
          </div>
          <ButtonGroup className="w-full">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  className="h-10 bg-surface"
                  name={field.name}
                  id="confirmPassword"
                  defaultValue={field.value}
                  ref={field.ref}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  type={showConfirmPassword ? "text" : "password"}
                ></Input>
              )}
            ></Controller>
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
      </form>

      <p className="text-zinc-400 mt-2">
        Já tem uma conta?{" "}
        <Link className="text-secondary font-bold" href="/login">
          Faça Login
        </Link>
      </p>
    </div>
  );
  */
}
