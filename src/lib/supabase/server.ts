import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookiesStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookiesStore.getAll();
        },

        setAll(listCookies) {
          try {
            listCookies.forEach(({ name, value, options }) => {
              cookiesStore.set(name, value, options);
            });
          } catch {
            /* Não é possível manipular o banco de dados em Server Components / Server Actions */
          }
        },
      },
    },
  );
}
