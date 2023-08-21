import { createRouteHandlerClient } from "../../../../node_modules/@supabase/auth-helpers-nextjs/dist/index";
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from "../../../../node_modules/next/server";

export const dynamic = 'force-dynamic';

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if(code !== null) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  } 

  return NextResponse.redirect(requestUrl.origin);
}