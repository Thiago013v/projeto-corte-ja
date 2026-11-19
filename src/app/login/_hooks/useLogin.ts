import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schemaLogin = yup.object({
  email: yup
    .string()
    .required("*Este campo é obrigatório")
    .email("*Preencha o Email corretamente"),
  password: yup.string().required("*Este campo é obrigatório"),
});

type loginType = yup.InferType<typeof schemaLogin>;

export default function useLogin() {
  const router = useRouter();

  const [isSending, setIsSending] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data: loginType) => {
    setIsSend(true);
    setIsSending(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      /* Futuramente iremos trabalhar com os erros nesse projeto */
      console.log(error);

      return;
    }

    setIsSending(false);
    router.push("/catalogo");
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    Controller,
    isSend,
    isSending,
  };
}
