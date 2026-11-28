import CardsCadasterBarberShop from "../_components/CardsCadasterBarberShop";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function BarberShopComponent() {
  await connection();

  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();
  const user = await supabase.auth.getUser();
  const userId = await supabase
    .from("users")
    .select("role")
    .eq("user_id", user.data.user?.id);

  if (!data?.claims || !userId.data) {
    redirect("/cadastro-usuario");
  }

  if (userId.data) {
    if (userId.data[0].role !== "barber") {
      redirect("/cadastro-usuario");
    }
  }

  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="max-sm:text-[0.9rem] max-lg:mt-4 text text-center text-red-500 font-bold mb-10">
        *É necessário ter uma conta de barbeiro criada
      </h1>

      <div className="flex flex-row justify-center items-center gap-4 w-full">
        <CardsCadasterBarberShop></CardsCadasterBarberShop>
      </div>
    </main>
  );
}
