import { getUserIdFromPayload } from "@/src/app/actions/login";
import { prisma } from "@/src/app/lib/db";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

/**
 * Callback occurs after user provides Gig2Hire permission to verify github
 * @param req GET request callback from twitter api containing auth code
 * @returns X verify success or failure response
 * @author horlarmmy
 */
export async function GET(req: Request) {
    console.log("Received callback from GitHub");
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    let status = 'failure'

    if (!code) {
        console.log("Error: No code provided.");
        return;
    }

    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET;
    const tokenUrl = `https://github.com/login/oauth/access_token`;

    try {
        // Exchange code for access token
        const response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });

        const data = await response.json();
        const accessToken = data.access_token;

        if (!accessToken) {
            console.log("Error: No access token received.");
            redirect(`/sign-in?github_verify=${status}`);
            return;
        }

        // Fetch GitHub user data
        const userResponse = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userData = await userResponse.json();
        console.log("GitHub User Data:", userData);

        // Fetch user repositories
        const reposResponse = await fetch("https://api.github.com/user/repos", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const repos = await reposResponse.json();
        console.log("Got repos")
        const commitPromises = repos.map((repo: any) =>
            fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then((res) => res.json())
        );
        console.log("Got commits")
        const allCommits = await Promise.all(commitPromises);

        console.log("Got commit")

        // Calculate total commits
        const totalCommits = allCommits.reduce((sum, repoCommits) => sum + repoCommits.length, 0);
        console.log("Total GitHub Commits:", totalCommits);

        // Get userId from the session payload
        const userId = await getUserIdFromPayload();

        // Update user details in the database
        await prisma.user.update({
            where: {
                userId: userId,
            },
            data: {
                role: "Freelancer",
                githubCommits: totalCommits,
            },
        });

        status = 'success'
        console.log("GitHub Verification completed successfully!");
    } catch (error) {
        console.error("Error during GitHub verification:", error);
        status = 'failure'
        redirect(`/sign-in?github_verify=${status}`);
    }
    redirect(`/sign-in?github_verify=${status}`);
}
