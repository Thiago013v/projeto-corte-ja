import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller } from "react-hook-form";

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
  } = useForm({ resolver: yupResolver(schemaCadasterUser) });

  const onSubmit = (data: typeData) => {
    console.log(data);
  };

  return { Controller, handleSubmit, errors, control, onSubmit };
}
