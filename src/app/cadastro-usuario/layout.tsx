import CadasterContextProvider from "./CadasterContext";

export default function LayoutCadaster({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CadasterContextProvider>{children}</CadasterContextProvider>;
}
