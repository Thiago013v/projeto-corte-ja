"use client";

import React, { createContext } from "react";
import { useState } from "react";

interface CadasterContextType {
  showCardConfirmation: boolean;
  setShowCardConfirmation: (boolean: boolean) => void;
}

export const CadasterContext = createContext<CadasterContextType | null>(null);

export default function CadasterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCardConfirmation, setShowCardConfirmation] =
    useState<boolean>(false);

  return (
    <CadasterContext.Provider
      value={{ showCardConfirmation, setShowCardConfirmation }}
    >
      {children}
    </CadasterContext.Provider>
  );
}
