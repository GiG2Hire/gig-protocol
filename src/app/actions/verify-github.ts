"use server";
import { prisma } from "../lib/db";
import { supabase } from "@/src/utils/supabase";
import { getPayload, isLoggedIn } from "./login";

export default async function githubVerification(code: any) {
  if (!code) {
    console.log("Error: No code provided.");
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const tokenUrl = `https://github.com/login/oauth/access_token`;

  try {
    //confirm user is logged in
    const payload = await getPayload();
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

    // Fetch GitHub user data
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = await userResponse.json();
    const reposResponse = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const repos = await reposResponse.json();

    const commitPromises = repos.map((repo: any) =>
      fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json())
    );

    const allCommits = await Promise.all(commitPromises);

    // Calculate total commits
    const totalCommits = allCommits.reduce(
      (sum, repoCommits) => sum + repoCommits.length,
      0
    );
    console.log(userData.login, totalCommits)

    // Get user wallet address from session or cookie
    const walletAddress = payload.iss; // Replace with actual method to get the address

    // Update user details in database
    const updatedUser = await prisma.user.update({
      where: { address: walletAddress },
      data: {
        role: "Freelancer",
        githubCommits: totalCommits,
      },
    });

    console.log("User updated:", updatedUser);

    return true;

  } catch (error) {
    console.log("Error during GitHub verification:", error);
  }
}
