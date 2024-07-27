"use server" 
export default async function performTwitterVerification(code:any) {
    console.log("Performing Twitter Verification");
    const xAccessTokenURL = `https://api.twitter.com/2/oauth2/token?code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/freelancer-dashboard/&code_verifier=challenge`;
    const clientId = process.env.NEXT_PUBLIC_X_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_X_CLIENT_SECRET;
    const base64Secret = btoa(clientId + ":" + clientSecret);
    let response  = await fetch(xAccessTokenURL, {
      method: 'POST',
      headers: {
        'Authorization':  `Basic ${base64Secret}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    // console.log(response.json());
    let jsonRes = await response.json();
    // console.log(jsonRes);
    const bearerToken = jsonRes.access_token;
    const tokenType = jsonRes.token_type;
    const followerURL = "https://api.twitter.com/2/users/me?user.fields=public_metrics";
    console.log("==================");
    console.log(jsonRes);
    console.log("==================");
    let userDetailsRes = await fetch(followerURL, {
      headers: {
        'Authorization': `Bearer ${jsonRes.access_token}`
      }
    });
    let jsonUserDetailsRes = await userDetailsRes.json();
    console.log(jsonUserDetailsRes);
    console.log("Twitter Verification completed!!");
}