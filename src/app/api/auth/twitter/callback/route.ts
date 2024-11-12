import { getUserIdFromPayload } from "@/src/app/actions/login";
import { prisma } from "@/src/app/lib/db";
import { redirect } from "next/navigation";

/**
 * Callback occurs after user provides Gig2Hire permission to verify github
 * @param req GET request callback from twitter api containing auth code
 * @returns X verify success or failure response
 * @author mgroovyank (MAYANK CHHIPA)
 */
export async function GET(req: Request) {
  console.log("Received callback from twitter");
  const { searchParams } = new URL(req.url);
  console.log(req.url);
  const code = searchParams.get("code");
  console.log(code);
  if (code == null || code == undefined || code == "") {
    return;
  }
  console.log("Performing Twitter Verification...");
  const redirectUri = process.env.NEXT_PUBLIC_VERCEL_APP_URL;
  const xAccessTokenURL = `https://api.twitter.com/2/oauth2/token?code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}/api/auth/twitter/callback/&code_verifier=challenge`;
  const clientId = process.env.NEXT_PUBLIC_X_CLIENT_ID;
  const clientSecret = process.env.X_CLIENT_SECRET;
  const base64Secret = btoa(clientId + ":" + clientSecret);
  let response = await fetch(xAccessTokenURL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64Secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  // console.log(response.json());
  let jsonRes = await response.json();
  // console.log(jsonRes);
  const bearerToken = jsonRes.access_token;
  const tokenType = jsonRes.token_type;
  const followerURL =
    "https://api.twitter.com/2/users/me?user.fields=public_metrics";
  console.log("==================");
  console.log(jsonRes);
  console.log("==================");
  let userDetailsRes = await fetch(followerURL, {
    headers: {
      Authorization: `Bearer ${jsonRes.access_token}`,
    },
  });
  let jsonUserDetailsRes = await userDetailsRes.json();
  console.log(jsonUserDetailsRes);
  // {
  //   data: {
  //     name: 'MAYANK CHHIPA',
  //     id: '97045731060800',
  //     public_metrics: {
  //       followers_count: 29,
  //       following_count: 99,
  //       tweet_count: 524,
  //       listed_count: 0,
  //       like_count: 763
  //     },
  //     username: 'mgroovyank'
  //   }
  // }
  console.log("Twitter Verification completed!!");

  const userId = await getUserIdFromPayload();

  try {
    await prisma.user.update({
      where: {
        userId: userId,
      },
      data: {
        xFollowers:
          jsonUserDetailsRes["data"]["public_metrics"]["followers_count"],
      },
    });
  } catch (error) {
    console.log(error);
    redirect("/sign-in?x_verify=failure");
  }
  redirect("/sign-in?x_verify=success");
}
