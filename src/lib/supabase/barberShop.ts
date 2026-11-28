"use server";

import { createClient } from "./server";
import type { cadasterBarberShopType } from "@/app/cadastro-barbearia/_hooks/useCadasterBarberShop";

export async function cadasterBarberShop(
  dataBarberShop: cadasterBarberShopType,
) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  await supabase.from("barber_shop").insert({
    barber_id: data.user?.id,
    barber_shop_name: dataBarberShop.barberShopName,
    cnpj: dataBarberShop.cnpj,
    cep: Number(dataBarberShop.cep),
    state: dataBarberShop.state.toLowerCase(),
    city: dataBarberShop.city,
    street_number: dataBarberShop.numberAddress,
    street_address: dataBarberShop.address,
  });

  return;
}
