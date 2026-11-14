import { useContext } from "react";
import { CadasterContext } from "../CadasterContext";

export default function useCadasterContext() {
  const response = useContext(CadasterContext);

  if (!response) {
    throw new Error(
      "Não é permitido utilizar dados do Provedor fora do Provedor",
    );
  }

  const { setShowCardConfirmation, showCardConfirmation } = response;

  return { setShowCardConfirmation, showCardConfirmation };
}
