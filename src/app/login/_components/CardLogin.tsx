"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import useLogin from "../_hooks/useLogin";
import { Spinner } from "@/components/ui/spinner";

export default function CardLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    Controller,
    isSend,
    isSending,
  } = useLogin();

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-cards w-[95%] max-sm:mt-5 md:w-[60%] lg:w-[30%] p-6 shadow-md rounded-md">
      <h1 className="text-5xl text-secondary font-bold mb-4">Login</h1>

      <form
        className="flex flex-col w-full h-full justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                onChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
              ></Input>
            )}
          ></Controller>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <div className="flex flex-col">
            {errors.password && (
              <span className="text-red-500 mt-4">
                {errors.password.message}
              </span>
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
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  defaultValue={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                ></Input>
              )}
            ></Controller>
            <Button
              className="bg-surface shadow-md h-10"
              onClick={() => setShowPassword(!showPassword)}
              isDisabled={isSend ? true : false}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </Button>
          </ButtonGroup>
        </div>
        <button className="p-2 bg-secondary text-surface font-bold text-3xl rounded-md hover:bg-hover-secondary cursor-pointer w-[70%] mt-3">
          {isSending ? (
            <p className={`flex flex-row justify-center items-center gap-2`}>
              <Spinner className="w-8 h-8"></Spinner>
              Entrando
            </p>
          ) : (
            <p>Entrar</p>
          )}
        </button>
      </form>

      <p className="text-zinc-400 mt-2">
        Não tem uma conta?{" "}
        <Link className="text-secondary font-bold" href="/cadastro-usuario">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
