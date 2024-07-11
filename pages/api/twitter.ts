import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const url = window.location.href;
    // const code = req.url.split("?code=")[1];
    // console.log(req);
    const xAccessTokenURL = `https://api.twitter.com/2/oauth2/token?code=${req.query.code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/freelancer-dashboard/&code_verifier=challenge`;
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
    res.status(200).send(jsonUserDetailsRes);
}