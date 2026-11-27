import CardsCadasterBarberShop from "./_components/CardsCadasterBarberShop";

export default function PageCadasterBarberShop() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="max-sm:text-[0.9rem] max-lg:mt-4 text text-center text-red-500 font-bold mb-10">
        *É necessário ter uma conta de barbeiro criada
      </h1>

      <div className="flex flex-row justify-center items-center gap-4 w-full">
        <CardsCadasterBarberShop></CardsCadasterBarberShop>
      </div>
    </main>
  );
}
