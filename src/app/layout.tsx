import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import logoCorteja from "../../public/logo-corteja.png";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning>
        <div className="grid grid-cols-[1fr] grid-rows-[80px_1fr_80px]">
          <header className="flex flex-row justify-between items-center col-start-1 col-end-2 row-start-1 row-end-2 bg-surface p-10 shadow-md z-1000 sticky top-0">
            <Link href="/">
              <Image
                src={logoCorteja}
                alt="Logo Cortejá"
                loading="eager"
                className="w-37.5"
              ></Image>
            </Link>

            <nav>
              <ul className="flex flex-row justify-center items-center gap-8">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-1 text-[1.1rem]"
                  >
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalogo"
                    className="hover:underline hover:underline-offset-1 text-[1.1rem]"
                  >
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cadastro"
                    className="bg-secondary p-2 rounded-md text-surface hover:bg-hover-secondary  text-[1.1rem]"
                  >
                    Cadastre-se
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
