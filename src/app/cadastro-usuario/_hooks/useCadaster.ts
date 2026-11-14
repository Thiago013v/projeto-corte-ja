import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";
import useCadasterContext from "./useCadasterContext";
import { useState } from "react";

const schemaCadasterUser = yup.object({
  fullName: yup.string().required("*Este campo é obrigatório"),
  email: yup
    .string()
    .email("*Preencha o Email corretamente")
    .required("*Este campo é obrigatório"),
  password: yup.string().required("*Este campo é obrigatório"),
  confirmPassword: yup
    .string()
    .required("*Este campo é obrigatório")
    .oneOf([yup.ref("password")], "*As senhas não coincidem"),
});

type typeData = yup.InferType<typeof schemaCadasterUser>;

export function useCadaster() {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schemaCadasterUser),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { setShowCardConfirmation } = useCadasterContext();
  const [isSending, setIsSending] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const onSubmit = async (dataCadaster: typeData) => {
    setIsSend(true);
    setIsSending(true);

    const supabase = createClient();

    await supabase.auth.signUp({
      email: dataCadaster.email,
      password: dataCadaster.password,
      options: {
        emailRedirectTo: "http://localhost:3000/catalogo",
        data: {
          full_name: dataCadaster.fullName,
          role: "user",
        },
      },
    });

    setShowCardConfirmation(true);
  };

  return {
    Controller,
    handleSubmit,
    errors,
    control,
    onSubmit,
    isSending,
    isSend,
  };
}
