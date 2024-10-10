import { getUserIdFromPayload } from "@/src/app/actions/login";
import { prisma } from "@/src/app/lib/db";
import { redirect } from "next/navigation";

/**
 * Callback occurs after user provides Gig2Hire permission to verify github
 * @param req GET request callback from github api containing auth code
 * @returns GutHub verify success or failure response
 * @author alhonaut
 */

export async function GET(req: Request) {
    console.log("Received callback from github");
    const { searchParams } = new URL(req.url);
    console.log(req.url);
    const code = searchParams.get("code");
    console.log(code);
    if (code == null || code == undefined || code == "") {
        return;
    }
    console.log("Performing Github Verification...");

    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const base64Secret = btoa(clientId + ":" + clientSecret);

    // Exchange code for access token
    // const response = await fetch(tokenUrl, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //         client_id: clientId,
    //         client_secret: clientSecret,
    //         code,
    //     }),
    // });

    // const data = await response.json();
    // const accessToken = data.access_token;

    // // Fetch GitHub user data
    // const userResponse = await fetch("https://api.github.com/user", {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     },
    // });

    // const userData = await userResponse.json();
    // const reposResponse = await fetch("https://api.github.com/user/repos", {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     },
    // });

    // const repos = await reposResponse.json();

    // const commitPromises = repos.map((repo: any) =>
    //     fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     }).then((res) => res.json())
    // );

    // const allCommits = await Promise.all(commitPromises);

    // // Calculate total commits
    // const totalCommits = allCommits.reduce(
    //     (sum, repoCommits) => sum + repoCommits.length,
    //     0
    // );
    // console.log(userData.login, totalCommits)

}