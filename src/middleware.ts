import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getPayload, isLoggedIn } from "./app/actions/login";
import { FREELANCER } from "./constants/appConstants";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("pathansdjdsk:", pathname);
  const isFreelancerDashboard = pathname.startsWith("/freelancer-dashboard");
  const isChatWindow = pathname.startsWith("/chat");
  const isAuth = await isLoggedIn();
  console.log("Inside Middleware!!----------------");

  if (!isAuth) {
    console.log("Not Authenticated!!!!!");
    return NextResponse.redirect(new URL("/", request.url));
  }

  const payload = await getPayload();
  if (payload.ctx.role == FREELANCER) {
    console.log("Role is freelancer confirmed!!");
  }
  if (isFreelancerDashboard) {
    console.log("Inside freelancer dashboard!!!!!");
    const userDetails = await getPayload();
    if (!userDetails.ctx.role) {
      console.log("User has not been assigned any role!!");
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (isChatWindow) {
    console.log("Inside chat window");
    if (payload.ctx.role != FREELANCER) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const id = request.nextUrl.pathname.split("/")[2];
    console.log("------------------", id);
    if (payload.ctx.userId == id.split("-")[1]) {
      console.log("Trying to access valid chat!");
    }
  }

  //   return NextResponse.redirect(new URL("/freelancer-dashboard", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/freelancer-dashboard/:path*", "/chat/:path*"],
};
