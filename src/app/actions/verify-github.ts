//actions/verify-github
"use server"
import { NextResponse } from "next/server";
export default async function gtihubVerification(code:any) {

    if (!code) {
        console.log("Error no code")
    }

    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const tokenUrl = `https://github.com/login/oauth/access_token`;

    try {
        // Exchange code for access token
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });

        const data = await response.json();

        // if (data.error) {
        //     return res.status(400).json({ error: data.error_description });
        // }

        const accessToken = data.access_token;

        // Fetch GitHub user data using the access token
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userData = await userResponse.json();

        const reposResponse = await fetch('https://api.github.com/user/repos', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        
        const repos = await reposResponse.json();
        
        const commitPromises = repos.map(repo =>
            fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then(res => res.json())
        );
        
        const allCommits = await Promise.all(commitPromises);
        
        console.log(userData.login, allCommits.length);

        // Store userData and commits in session or database as needed

        // Redirect after verification
        //const redirectUrl = '/freelancer-dashboard';  // Replace this with your target URL
        return true;

    } catch (error) {
        console.log("Error fetching data")
        //return res.status(500).json({ error: 'An error occurred during GitHub verification' });
    }
}
