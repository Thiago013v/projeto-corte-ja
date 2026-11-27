import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import CepType from "../_type/type";

const cadasterBarberShopSchema = yup.object({
  barberShopName: yup.string().required("*Este campo é obrigatório"),
  cnpj: yup
    .string()
    .required("*Este campo é obrigatório")
    .min(14, "*O CNPJ deve conter 14 caracteres")
    .max(14, "O CNPJ deve conter 14 caracteres"),
  cep: yup
    .string()
    .required("*Este campo é obrigatório")
    .min(8, "*O CEP deve conter 8 dígitos")
    .max(8, "*O CEP deve conter 8 dígitos"),
  state: yup.string().required("*Este campo é obrigatório"),
  city: yup.string().required("*Este campo é obrigatório"),
  address: yup.string().required("*Este campo é obrigatório"),
  numberAddress: yup.string().required("*Este campo é obrigatório"),
});

type cadasterBarberShopType = yup.InferType<typeof cadasterBarberShopSchema>;

export default function useCadasterBarberShop() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValues,
    watch,
  } = useForm({
    defaultValues: {
      barberShopName: "",
      cnpj: "",
      cep: "",
      state: "",
      city: "",
      address: "",
      numberAddress: "",
    },
    resolver: yupResolver(cadasterBarberShopSchema),
  });

  const onSubmit = (data: cadasterBarberShopType) => {
    console.log(data);
    return;
  };

  const getCep = async (userCep: string) => {
    if (userCep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${userCep}/json/`);
      const data: CepType = await response.json();

      setValues({
        state: data.uf,
        city: data.localidade,
        address: data.logradouro,
      });

      return;
    }
  };
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    getCep,
  };
}
