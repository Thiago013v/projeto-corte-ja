import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createClient } from "@/lib/supabase/server";

const schemaLogin = yup.object({
  email: yup
    .string()
    .required("*Este campo é obrigatório")
    .email("*Preencha o Email corretamente"),
  password: yup.string().required("*Este campo é obrigatório"),
});

type loginType = yup.InferType<typeof schemaLogin>;

export default function useLogin() {
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
    const supabase = await createClient();

    await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}
