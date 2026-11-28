import BarberShopComponent from "./_components/BarberShopComponent";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default async function PageCadasterBarberShop() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <Suspense
        fallback={<Spinner className="w-100 h-25 text-secondary"></Spinner>}
      >
        <BarberShopComponent></BarberShopComponent>
      </Suspense>
    </div>
  );
}
