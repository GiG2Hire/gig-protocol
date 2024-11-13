import { isLoggedIn } from "@/src/app/actions/login";
import { NextRequest, NextResponse } from "next/server";
import { decodeJWT } from "thirdweb/utils";

export async function GET(req: NextRequest) {
  const isAuth = await isLoggedIn();
  if (!isAuth) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const jwtObject = req.cookies.get("jwt");
  const jwtToken: string = jwtObject?.value as string;
  const { payload, signature } = decodeJWT(jwtToken);
  const ctx: JWTContext = payload.ctx as JWTContext;
  const userId = ctx.userId;
  const role = ctx.role;

  return NextResponse.json({ userId, role });
}
