"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import logoCorteja from "../../public/logo-corteja.png";
import Link from "next/link";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<object | null>(null);
  const [isBarber, setIsBarber] = useState<boolean>(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    async function confirmBarberUser() {
      const userInfo = await supabase.from("users").select("role");

      if (userInfo.data && userInfo.data?.length > 0) {
        if (userInfo.data[0].role) {
          const userRole: string = userInfo.data[0].role;

          if (userRole === "barber") {
            setIsBarber(true);
            return;
          }
        }
      }
    }

    confirmBarberUser();
  }, []);

  return (
    <html suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning>
        <div
          className="min-h-svh grid grid-cols-[1fr] 
          sm:grid-rows-[115.517px_1fr] md:grid-rows-[91.5167px_1fr]"
        >
          <header className="flex flex-col sm:flex-row justify-between items-center bg-surface pl-4 pr-4 pb-2 pt-2  shadow-md z-1000 sticky top-0">
            <Link href="/">
              <Image
                src={logoCorteja}
                alt="Logo Cortejá"
                loading="eager"
                className="w-37.5"
              ></Image>
            </Link>

            <nav>
              <ul
                className={`flex flex-row ${isBarber && "flex-wrap"} justify-center items-center gap-8`}
              >
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:underline-offset-1 text-[14px] sm:text-[1.1rem]"
                  >
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalogo"
                    className="hover:underline hover:underline-offset-1 text-[15px] sm:text-[1.1rem]"
                  >
                    Catálogo
                  </Link>
                </li>
                <li>
                  {user && isBarber && (
                    <Link
                      href="/cadastro-barbearia"
                      className="bg-secondary p-2 rounded-md text-surface hover:bg-hover-secondary text-[15px] sm:text-[1.1rem]"
                    >
                      Cadastrar Barbearia
                    </Link>
                  )}
                </li>
                <li>
                  {user ? (
                    <button
                      className="bg-secondary pt-1.5 pb-1.5 pr-8 pl-8 rounded-md text-surface hover:bg-hover-secondary text-[15px] sm:text-[1.1rem] cursor-pointer"
                      onClick={async () => {
                        const supabase = createClient();

                        await supabase.auth.signOut();
                      }}
                    >
                      Sair
                    </button>
                  ) : (
                    <Link
                      href="/cadastro-usuario"
                      className="bg-secondary p-2 rounded-md text-surface hover:bg-hover-secondary text-[15px] sm:text-[1.1rem]"
                    >
                      Cadastre-se
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </header>

          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
