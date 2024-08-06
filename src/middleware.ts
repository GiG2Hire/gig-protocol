import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getPayload } from "./app/actions/login";
import { FREELANCER } from "./constants/appConstants";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("Inside Middleware!!----------------");
  const payload = await getPayload();
  if (payload.ctx.role == FREELANCER) {
    console.log("Role is freelancer confirmed!!");
  }
  //   return NextResponse.redirect(new URL("/freelancer-dashboard", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/freelancer-dashboard/:path*",
};
