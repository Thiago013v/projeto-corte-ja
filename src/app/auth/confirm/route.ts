import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const tokenHash = searchParams.get("token_hash") ?? "";
  const type = searchParams.get("type") ?? "";
  const next = searchParams.get("next") ?? "/";

  const supabase = await createClient();

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: type,
    });

    if (!error) {
      const redirectUrl = new URL(next, request.url);

      if (redirectUrl.origin === request.nextUrl.origin) {
        return NextResponse.redirect(redirectUrl);
      }
    }
  }

  return NextResponse.redirect(new URL(next, request.url));
}
