import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getPayload, isLoggedIn } from "./app/actions/login";
import { CLIENT, FREELANCER } from "./constants/appConstants";
// import { decodeJWT } from "thirdweb/utils";
import { jwtDecode } from "jwt-decode";

/**
 * This function can be marked `async` if using `await` inside
 * @param request executed on the edge, runs before page rendering and API routes.
 * @author mgroovyank (MAYANK CHHIPA)
 */
export async function middleware(request: NextRequest) {
  console.log("---------------Inside Middleware!!----------------");

  const pathname = request.nextUrl.pathname;
  const isSignInPage = pathname == "/sign-in" ? true : false;
  const isChatWindow = pathname.startsWith("/chat");

  // Get user id and role from jwt
  const jwtObject = request.cookies.get("jwt");
  console.log(request.cookies);
  console.log("jwt decode:", jwtObject);

  if (jwtObject == undefined) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // const jwt = decodeJWT(request.cookies.get("jwt")?.value as string);
  const jwt = jwtDecode(request.cookies.get("jwt")?.value as string);
  console.log("jwt decode:", jwt);
  // const ctx: JWTContext = jwt.payload.ctx as JWTContext;
  const ctx = jwt.ctx;

  const userId = ctx.userId;
  const role = ctx.role;

  if (isSignInPage) {
    if (role == FREELANCER) {
      return NextResponse.redirect(
        new URL("/freelancer-dashboard", request.url)
      );
    }
    if (role == CLIENT) {
      return NextResponse.redirect(new URL("/client-dashboard", request.url));
    }
  }

  if (isChatWindow) {
    console.log("Inside chat window");
    console.log(request.nextUrl);
    const cloneUrl = request.nextUrl.clone();
    cloneUrl.searchParams.set("userId", userId);
    request.nextUrl.searchParams.set("userId", userId);
    const searchParams = request.nextUrl;
    console.log("use search params ", userId);
    if (role != FREELANCER && role != CLIENT) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const id = request.nextUrl.pathname.split("/")[2];
    console.log("------------------", id);
    if (role == FREELANCER) {
      if (userId == id.split("-")[1]) {
        console.log("Trying to access valid chat!");
      }
    } else if (role == CLIENT) {
      console.log("Accessing chat as client!");
      if (userId == id.split("-")[0]) {
        console.log("Trying to access valid chat!");
      }
    }
    console.log("return rewritten response");
    console.log(request.nextUrl.searchParams);
    console.log(cloneUrl);
    // return NextResponse.rewrite(
    //   new URL("http://localhost:3000/chat/2-1-1?userId=2")
    // );
    console.log(request.nextUrl.searchParams.get("userId"));
    return NextResponse.rewrite(cloneUrl);
  }

  return NextResponse.next();
  // const isFreelancerDashboard = pathname.startsWith("/freelancer-dashboard");
  // const isAuth = await isLoggedIn();

  // if (!isAuth) {
  //   console.log("Not Authenticated!!!!!");
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // const payload: JWTPayload = await getPayload();
  // const payloadContext: any = payload.ctx;
  // if (payload.ctx!.role == FREELANCER) {
  //   console.log("Role is freelancer confirmed!!");
  // }
  // if (isFreelancerDashboard) {
  //   console.log("Inside freelancer dashboard!!!!!");
  //   const userDetails = await getPayload();
  //   console.log(userDetails);
  //   if (!userDetails.ctx.role) {
  //     console.log("User has not been assigned any role!!");
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }

  // // Continue processing if no condition is met
  // return NextResponse.next();
  //   return NextResponse.redirect(new URL("/freelancer-dashboard", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-in", "/chat/:path*"],
  // matcher: ["/freelancer-dashboard/:path*", "/chat/:path*"],
};
