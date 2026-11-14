"use client";

import CardCadaster from "./_components/CardCadaster";
import CardConfirmationEmail from "./_components/CardConfirmationEmail";
import useCadasterContext from "./_hooks/useCadasterContext";

export default function CadasterUser() {
  const { showCardConfirmation } = useCadasterContext();

  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <div
          className={`flex flex-row justify-center items-center w-full h-full ${showCardConfirmation && "blur-2xl"}`}
        >
          <CardCadaster></CardCadaster>
        </div>
        <CardConfirmationEmail></CardConfirmationEmail>;
      </main>
    </>
  );
}
